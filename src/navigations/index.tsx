import { MainTabsNavigator } from './MainTabs';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './stack';

export { useRootNavigation, useRootRoute } from './hooks';

export type { RootStackParamList } from './type';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
