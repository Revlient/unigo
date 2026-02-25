import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export interface DbInterface {
  prepare: (query: string) => {
    all: (params?: any[]) => Promise<any[]>;
    get: (params?: any[]) => Promise<any>;
    run: (params?: any[]) => Promise<any>;
  };
  exec: (query: string) => Promise<any>;
}

export function getDb(): DbInterface {
  return {
    prepare: (query: string) => {
      // Convert SQLite ? placeholders to Postgres $1, $2, ...
      let paramCount = 0;
      const pgQuery = query.replace(/\?/g, () => `$${++paramCount}`);

      return {
        all: async (params: any[] = []) => {
          const { rows } = await pool.query(pgQuery, params);
          return rows;
        },
        get: async (params: any[] = []) => {
          const { rows } = await pool.query(pgQuery, params);
          return rows[0];
        },
        run: async (params: any[] = []) => {
          const { rows } = await pool.query(pgQuery, params);
          return rows;
        },
      };
    },
    exec: async (query: string) => {
      const { rows } = await pool.query(query);
      return rows;
    },
  };
}
