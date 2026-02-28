import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from './type';

export type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

export const useHomeStackNavigation = () =>
  useNavigation<HomeStackNavigationProp>();

export const useHomeStackRoute = <TRouteName extends keyof HomeStackParamList>() =>
  useRoute<RouteProp<HomeStackParamList, TRouteName>>();
