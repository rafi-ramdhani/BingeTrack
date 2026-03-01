import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { WatchlistStackParamList } from './types';

export const WatchlistStack =
  createNativeStackNavigator<WatchlistStackParamList>();
