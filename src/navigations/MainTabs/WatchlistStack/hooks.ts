import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { WatchlistStackParamList } from './type';

export type WatchlistStackNavigationProp =
  NativeStackNavigationProp<WatchlistStackParamList>;

export const useWatchlistStackNavigation = () =>
  useNavigation<WatchlistStackNavigationProp>();

export const useWatchlistStackRoute = <
  TRouteName extends keyof WatchlistStackParamList,
>() => useRoute<RouteProp<WatchlistStackParamList, TRouteName>>();
