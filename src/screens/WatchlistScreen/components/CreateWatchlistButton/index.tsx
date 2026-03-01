import { AppText } from '@/components/AppText';
import { useRootNavigation } from '@/navigations';
import { colors, spacing } from '@/themes';
import { Pressable, StyleSheet } from 'react-native';

export const CreateWatchlistButton = () => {
  const { navigate } = useRootNavigation();
  return (
    <Pressable
      onPress={() => navigate('WatchlistForm')}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <AppText style={styles.buttonLabel}>+</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 36,
    lineHeight: 36,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.2,
  },
});
