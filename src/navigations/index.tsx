import { NavigationContainer } from '@react-navigation/native';
import { MainTabsNavigator } from './MainTabs';
import { stackScreenOptions } from './options';
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
