import { useDatabaseReady } from '@/database';
import { RootNavigator } from '@/navigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '@/themes';

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
};

const AppContent = () => {
  const isDbReady = useDatabaseReady();

  if (isDbReady) return <RootNavigator />;

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
