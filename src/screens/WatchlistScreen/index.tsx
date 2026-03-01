import { colors, spacing } from '@/themes';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateWatchlistButton } from './components/CreateWatchlistButton';
import { WatchlistList } from './components/WatchlistList';
import { WatchlistScreenHeader } from './components/WatchlistScreenHeader';

export const WatchlistScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <WatchlistScreenHeader />
      <WatchlistList />
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
});
