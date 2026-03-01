import { colors, radii, spacing } from '@/themes';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateWatchlistButton } from './components/CreateWatchlistButton';
import { WatchlistList } from './components/WatchlistList';
import { WatchlistScreenHeader } from './components/WatchlistScreenHeader';
import DeleteIcon from '@/assets/trash-icon.svg';
import { useWatchlists } from './hooks/useWatchlists';
import { AppText } from '@/components/AppText';

export const WatchlistScreen = () => {
  const {
    isSelectionMode,
    watchlists,
    selectedWatchlistIds,
    pressWatchlist,
    deleteWatchlists,
    toggleSelectWatchlist,
  } = useWatchlists();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <WatchlistScreenHeader />

      <WatchlistList
        watchlists={watchlists}
        selectedWatchlistIds={selectedWatchlistIds}
        onPressItem={pressWatchlist}
        onLongPressItem={toggleSelectWatchlist}
      />

      {isSelectionMode && (
        <View style={styles.bulkDeleteContainer}>
          <View style={styles.bulkButtonContainer}>
            <AppText style={styles.selectedCountText}>
              {selectedWatchlistIds.length}
            </AppText>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.bulkButtonContainer,
              pressed && styles.pressed,
            ]}
            onPress={deleteWatchlists}
          >
            <DeleteIcon width={24} height={24} color={colors.danger} />
          </Pressable>
        </View>
      )}
      <CreateWatchlistButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xxl,
  },
  bulkDeleteContainer: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.lg + 56 + spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.full,
  },
  bulkButtonContainer: {
    width: 56,
    height: 56,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCountText: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
  },
  pressed: {
    opacity: 0.2,
  },
});
