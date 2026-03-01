import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useWatchlists } from '../../hooks/useWatchlists';
import { useRootNavigation } from '@/navigations';
import { colors, radii, spacing } from '@/themes';
import { AppText } from '@/components/AppText';

export const WatchlistList = () => {
  const { navigate } = useRootNavigation();

  const { watchlists } = useWatchlists();

  if (watchlists.length <= 0) {
    return (
      <View style={styles.listEmpty}>
        <AppText style={styles.listEmptyText}>There is no watchlist :(</AppText>
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
          style={({ pressed }) => [styles.listItem, pressed && styles.pressed]}
          onPress={() => navigate('WatchlistForm', { watchlistId: item.id })}
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
  pressed: {
    opacity: 0.2,
  },
});
