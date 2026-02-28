import { HomeNavigator } from './HomeStack';
import { WatchlistNavigator } from './WatchlistStack';
import { MainTabs } from './stack';

export { MainTabs } from './stack';
export { useMainTabsNavigation, useMainTabsRoute } from './hooks';
export type { MainTabsParamList } from './type';
export type { MainTabsNavigationProp } from './hooks';

export const MainTabsNavigator = () => {
  return (
    <MainTabs.Navigator screenOptions={{ headerShown: false }}>
      <MainTabs.Screen name="HomeStack" component={HomeNavigator} />
      <MainTabs.Screen name="WatchlistStack" component={WatchlistNavigator} />
    </MainTabs.Navigator>
  );
};
