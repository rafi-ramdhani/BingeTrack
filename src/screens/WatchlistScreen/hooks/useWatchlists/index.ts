import {
  deleteWatchlist,
  getAllWatchlists,
  type WatchlistItem,
} from '@/database';
import { useRootNavigation } from '@/navigations';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

export const useWatchlists = () => {
  const [watchlists, setWatchlists] = useState<WatchlistItem[]>([]);
  const [selectedWatchlistIds, setSelectedWatchlistIds] = useState<number[]>(
    [],
  );

  const { navigate } = useRootNavigation();

  const isSelectionMode = selectedWatchlistIds.length > 0;

  const loadWatchlists = useCallback(() => {
    const items = getAllWatchlists();
    setWatchlists(items);
  }, []);

  const toggleSelectWatchlist = (watchlistId: number) => {
    setSelectedWatchlistIds(current =>
      current.includes(watchlistId)
        ? current.filter(id => id !== watchlistId)
        : [...current, watchlistId],
    );
  };

  const pressWatchlist = (watchlistId: number) => {
    if (isSelectionMode) {
      toggleSelectWatchlist(watchlistId);
      return;
    }

    navigate('WatchlistForm', { watchlistId });
  };

  const deleteWatchlists = () => {
    if (selectedWatchlistIds.length <= 0) return;

    selectedWatchlistIds.forEach(id => {
      deleteWatchlist(id);
    });

    setSelectedWatchlistIds([]);
    loadWatchlists();
  };

  useFocusEffect(
    useCallback(() => {
      loadWatchlists();
    }, [loadWatchlists]),
  );

  return {
    isSelectionMode,
    watchlists,
    selectedWatchlistIds,
    pressWatchlist,
    deleteWatchlists,
    toggleSelectWatchlist,
  };
};
