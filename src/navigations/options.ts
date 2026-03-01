import { colors } from '@/themes';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const stackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: { backgroundColor: colors.background },
};
