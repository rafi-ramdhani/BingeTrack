import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { WatchlistStackParamList } from './type';

export const WatchlistStack =
  createNativeStackNavigator<WatchlistStackParamList>();
