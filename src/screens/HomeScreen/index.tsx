import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { useHomeStackNavigation } from '@/navigations/MainTabs/HomeStack/hooks';
import { View } from 'react-native';

export const HomeScreen = () => {
  const { navigate } = useHomeStackNavigation();

  return (
    <View>
      <AppText>Home Screen</AppText>
      <AppButton onPress={() => navigate('MovieDetailScreen', { movieId: 1 })}>
        To Detail 1
      </AppButton>
    </View>
  );
};
