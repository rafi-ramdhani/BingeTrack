import { HomeScreen } from '@/screens/HomeScreen';
import { HomeStack } from './stack';
import { MovieDetailScreen } from '@/screens/MovieDetailScreen';
export { useHomeStackNavigation, useHomeStackRoute } from './hooks';
export type { HomeStackParamList } from './type';

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
      />
    </HomeStack.Navigator>
  );
};
