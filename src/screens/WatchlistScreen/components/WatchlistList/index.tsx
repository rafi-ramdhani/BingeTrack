import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useWatchlists } from '../../hooks/useWatchlists';
import { useRootNavigation } from '@/navigations';
import { colors, radii, spacing } from '@/themes';
import { AppText } from '@/components/AppText';
import EmptyWatchlist from '@/assets/empty-watchlist.svg';
import DeleteIcon from '@/assets/trash-icon.svg';
import { deleteWatchlist } from '@/database';
import { useMemo, useState } from 'react';

export const WatchlistList = () => {
  const { navigate } = useRootNavigation();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { watchlists, reloadWatchlists } = useWatchlists();
  const isSelectionMode = selectedIds.length > 0;
  const selectedIdsSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const toggleSelection = (watchlistId: number) => {
    setSelectedIds(current =>
      current.includes(watchlistId)
        ? current.filter(id => id !== watchlistId)
        : [...current, watchlistId],
    );
  };

  const handleBulkDelete = () => {
    if (selectedIds.length <= 0) return;

    selectedIds.forEach(id => {
      deleteWatchlist(id);
    });

    setSelectedIds([]);
    reloadWatchlists();
  };

  if (watchlists.length <= 0) {
    return (
      <View style={styles.listEmpty}>
        <EmptyWatchlist width={100} height={100} color={colors.textSecondary} />
        <AppText style={styles.listEmptyText}>You don't have any watchlist..</AppText>
      </View>
    );
  }

  return (
    <FlatList
      data={watchlists}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={
        isSelectionMode ? (
          <View style={styles.selectionHeader}>
            <AppText style={styles.selectionText}>
              {selectedIds.length} selected
            </AppText>
            <Pressable
              style={({ pressed }) => [pressed && styles.pressed]}
              onPress={handleBulkDelete}
            >
              <DeleteIcon width={24} height={24} color={colors.danger} />
            </Pressable>
          </View>
        ) : null
      }
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.listItem,
            selectedIdsSet.has(item.id) && styles.listItemSelected,
            pressed && styles.pressed,
          ]}
          onPress={() =>
            isSelectionMode
              ? toggleSelection(item.id)
              : navigate('WatchlistForm', { watchlistId: item.id })
          }
          onLongPress={() => toggleSelection(item.id)}
          delayLongPress={400}
        >
          <AppText variant="title">{item.title}</AppText>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyText: {
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
  listContent: {
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
  selectionHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  selectionText: {
    color: colors.textSecondary,
  },
  listItem: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    padding: spacing.md,
    gap: spacing.xs,
    height: 80,
  },
  listItemSelected: {
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.2,
  },
});
