import { NavigationContainer } from '@react-navigation/native';
import { MainTabsNavigator } from './MainTabs';
import { stackScreenOptions } from './options';
import { WatchlistFormScreen } from '@/screens/WatchlistFormScreen';
import { RootStack } from './stack';

export { RootStack } from './stack';
export { useRootNavigation, useRootRoute } from './hooks';
export type { RootStackParamList } from './type';
export type { RootNavigationProp } from './hooks';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={stackScreenOptions}>
        <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
        <RootStack.Screen
          name="WatchlistForm"
          component={WatchlistFormScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
