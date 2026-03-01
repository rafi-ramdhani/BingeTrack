import { useEffect, useState } from 'react';
import { initDatabase } from './migrations';

export const useDatabaseReady = () => {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      try {
        await initDatabase();
        if (isMounted) {
          setIsDatabaseReady(true);
        }
      } catch (error) {
        console.error('Failed to initialize database', error);
      }
    };

    bootstrap();

    return () => {
      isMounted = false;
    };
  }, []);

  return isDatabaseReady;
};
