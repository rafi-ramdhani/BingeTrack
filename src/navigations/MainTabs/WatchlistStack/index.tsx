import { WatchlistScreen } from '@/screens/WatchlistScreen';
import { stackScreenOptions } from '@/navigations/options';
import { WatchlistStack } from './stack';

export { WatchlistStack } from './stack';
export { useWatchlistStackNavigation, useWatchlistStackRoute } from './hooks';
export type { WatchlistStackParamList } from './type';
export type { WatchlistStackNavigationProp } from './hooks';

export const WatchlistNavigator = () => {
  return (
    <WatchlistStack.Navigator screenOptions={stackScreenOptions}>
      <WatchlistStack.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
      />
    </WatchlistStack.Navigator>
  );
};
