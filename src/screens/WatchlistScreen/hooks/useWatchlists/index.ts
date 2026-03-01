import { getAllWatchlists, type WatchlistItem } from '@/database';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

export const useWatchlists = () => {
  const [watchlists, setWatchlists] = useState<WatchlistItem[]>([]);

  const loadWatchlists = () => {
    const items = getAllWatchlists();
    setWatchlists(items);
  };

  useFocusEffect(
    useCallback(() => {
      loadWatchlists();
    }, []),
  );

  return { watchlists };
};
