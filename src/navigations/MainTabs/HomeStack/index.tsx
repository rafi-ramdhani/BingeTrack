import { HomeScreen } from '@/screens/HomeScreen';
import { HomeStack } from './stack';
import { MovieDetailScreen } from '@/screens/MovieDetailScreen';

export { HomeStack } from './stack';
export { useHomeStackNavigation, useHomeStackRoute } from './hooks';
export type { HomeStackParamList } from './type';
export type { HomeStackNavigationProp } from './hooks';

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
      />
    </HomeStack.Navigator>
  );
};
