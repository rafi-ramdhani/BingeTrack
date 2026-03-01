import { colors } from '@/themes';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateWatchlistButton } from './components/CreateWatchlistButton';
import { WatchlistList } from './components/WatchlistList';

export const WatchlistScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <WatchlistList />
      <CreateWatchlistButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
