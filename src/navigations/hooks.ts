import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useRootNavigation = () => useNavigation<RootNavigationProp>();

export const useRootRoute = <TRouteName extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, TRouteName>>();
