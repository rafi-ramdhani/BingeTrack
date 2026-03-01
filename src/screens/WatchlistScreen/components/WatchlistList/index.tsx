import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { colors, radii, spacing } from '@/themes';
import { AppText } from '@/components/AppText';
import EmptyWatchlist from '@/assets/empty-watchlist.svg';
import { WatchlistItem } from '@/database';

type WatchlistListProps = {
  watchlists: WatchlistItem[];
  selectedWatchlistIds: number[];
  onPressItem: (watchlistId: number) => void;
  onLongPressItem: (watchlistId: number) => void;
};

export const WatchlistList = ({
  watchlists,
  selectedWatchlistIds,
  onPressItem,
  onLongPressItem,
}: WatchlistListProps) => {
  if (watchlists.length <= 0) {
    return (
      <View style={styles.listEmpty}>
        <EmptyWatchlist width={100} height={100} color={colors.textSecondary} />
        <AppText style={styles.listEmptyText}>
          You don't have any watchlist..
        </AppText>
      </View>
    );
  }

  return (
    <FlatList
      data={watchlists}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.listItem,
            selectedWatchlistIds.includes(item.id) && styles.listItemSelected,
            pressed && styles.pressed,
          ]}
          onPress={() => onPressItem(item.id)}
          onLongPress={() => onLongPressItem(item.id)}
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
