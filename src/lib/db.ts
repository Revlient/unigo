import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'hr-recruit.db');

export const isVercelWithoutDb = process.env.VERCEL === '1' && !process.env.POSTGRES_URL;
export const isVercelProd = process.env.VERCEL === '1' && !!process.env.POSTGRES_URL;

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

let sqliteDb: any = null;

export function getDb(): DbInterface {
  if (isVercelWithoutDb) {
    throw new Error('No database configured on Vercel. Use demo data fallback.');
  }

  if (isVercelProd) {
    // Production with Vercel Postgres
    const { sql } = require('@vercel/postgres');
    return {
      prepare: (query: string) => {
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

  // Local Development: SQLite (dynamic import to avoid Vercel build failure)
  if (!sqliteDb) {
    const Database = require('better-sqlite3');
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

function initializeSchemaLocal(db: any) {
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
