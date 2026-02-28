import { WatchlistScreen } from '@/screens/WatchlistScreen';
import { MovieDetailScreen } from '@/screens/MovieDetailScreen';
import { WatchlistStack } from './stack';

export { WatchlistStack } from './stack';
export { useWatchlistStackNavigation, useWatchlistStackRoute } from './hooks';
export type { WatchlistStackParamList } from './type';
export type { WatchlistStackNavigationProp } from './hooks';

export const WatchlistNavigator = () => {
  return (
    <WatchlistStack.Navigator screenOptions={{ headerShown: false }}>
      <WatchlistStack.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
      />
      <WatchlistStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
      />
    </WatchlistStack.Navigator>
  );
};
