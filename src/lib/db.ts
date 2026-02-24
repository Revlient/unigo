import Database from 'better-sqlite3';
import { sql } from '@vercel/postgres';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'hr-recruit.db');

let sqliteDb: Database.Database | null = null;

export const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';

// Unified DB Response type
export interface DbInterface {
  prepare: (query: string) => {
    all: (params?: any[]) => Promise<any[]>;
    get: (params?: any[]) => Promise<any>;
    run: (params?: any[]) => Promise<any>;
  };
  exec: (query: string) => Promise<any>;
  transaction: (fn: Function) => any;
}

export function getDb(): DbInterface {
  if (isProd) {
    // Production: Vercel Postgres
    return {
      prepare: (query: string) => {
        // Standardize parameters for Postgres ($1) vs SQLite (?)
        let paramCount = 0;
        const standardizedQuery = query.replace(/\?/g, () => `$${++paramCount}`);

        return {
          all: async (params: any[] = []) => {
            const { rows } = await sql.query(standardizedQuery, params);
            return rows;
          },
          get: async (params: any[] = []) => {
            const { rows } = await sql.query(standardizedQuery, params);
            return rows[0];
          },
          run: async (params: any[] = []) => {
            return await sql.query(standardizedQuery, params);
          }
        };
      },
      exec: async (query: string) => {
        return await sql.query(query);
      },
      transaction: (fn: Function) => fn
    };
  }

  // Local Development: SQLite (wrapped in Promises for consistency)
  if (!sqliteDb) {
    const fs = require('fs');
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    sqliteDb = new Database(DB_PATH);
    sqliteDb.pragma('journal_mode = WAL');
    initializeSchemaLocal(sqliteDb);
  }

  const db = sqliteDb!;
  return {
    prepare: (query: string) => {
      const stmt = db.prepare(query);
      return {
        all: async (params: any[] = []) => stmt.all(...params),
        get: async (params: any[] = []) => stmt.get(...params),
        run: async (params: any[] = []) => stmt.run(...params)
      };
    },
    exec: async (query: string) => db.exec(query),
    transaction: (fn: Function) => db.transaction(fn as any)
  };
}

function initializeSchemaLocal(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      experience TEXT NOT NULL,
      description TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS job_applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      location TEXT NOT NULL,
      job_id INTEGER NOT NULL,
      experience TEXT NOT NULL,
      resume_path TEXT,
      cover_letter TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (job_id) REFERENCES jobs(id)
    );
  `);
}
