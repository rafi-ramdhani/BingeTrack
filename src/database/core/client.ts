import {
  open,
  type NitroSQLiteConnection,
  type QueryResult,
  type QueryResultRow,
  type SQLiteQueryParams,
} from 'react-native-nitro-sqlite';

const DB_NAME = 'bingetrack.db';

let dbInstance: NitroSQLiteConnection | null = null;

export const getDatabase = (): NitroSQLiteConnection => {
  if (!dbInstance) {
    dbInstance = open({ name: DB_NAME, location: 'default' });
  }

  return dbInstance;
};

export const runSql = <Row extends QueryResultRow = QueryResultRow>(
  query: string,
  params: SQLiteQueryParams = []
): QueryResult<Row> => {
  const db = getDatabase();
  return db.execute<Row>(query, params);
};

export const runSqlAsync = async <Row extends QueryResultRow = QueryResultRow>(
  query: string,
  params: SQLiteQueryParams = []
): Promise<QueryResult<Row>> => {
  const db = getDatabase();
  return db.executeAsync<Row>(query, params);
};

export const queryAll = async <Row extends QueryResultRow = QueryResultRow>(
  query: string,
  params: SQLiteQueryParams = []
): Promise<Row[]> => {
  const result = await runSqlAsync<Row>(query, params);
  return result.rows._array;
};

export const queryFirst = async <Row extends QueryResultRow = QueryResultRow>(
  query: string,
  params: SQLiteQueryParams = []
): Promise<Row | null> => {
  const rows = await queryAll<Row>(query, params);
  return rows[0] ?? null;
};
