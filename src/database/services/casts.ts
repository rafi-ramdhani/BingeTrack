import { runSql } from '../core/client';
import { DB_TABLES } from '../core/tables';

type LastInsertIdRow = { id: number };

export type Cast = {
  id: number;
  name: string;
  createdAt: string;
};

export type CreateCastInput = {
  name: string;
};

export const createCast = (input: CreateCastInput): number => {
  runSql(
    `
      INSERT INTO ${DB_TABLES.CASTS} (name, createdAt)
      VALUES (?, ?);
    `,
    [input.name, new Date().toISOString()]
  );

  const result = runSql<LastInsertIdRow>('SELECT last_insert_rowid() AS id;');
  const row = result.rows.item(0);

  if (!row) {
    throw new Error('Failed to create cast.');
  }

  return row.id;
};

export const getAllCasts = (): Cast[] => {
  const result = runSql<Cast>(
    `
      SELECT id, name, createdAt
      FROM ${DB_TABLES.CASTS}
      ORDER BY createdAt DESC;
    `
  );

  return result.rows._array;
};

export const deleteCast = (id: number): void => {
  runSql(`DELETE FROM ${DB_TABLES.CASTS} WHERE id = ?;`, [id]);
};
