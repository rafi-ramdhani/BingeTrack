import { Pressable, PressableProps, StyleSheet } from 'react-native';
import AppText from '../AppText';
import { ReactNode } from 'react';
import { colors, radii, spacing } from '@/themes';

interface AppButtonProps extends PressableProps {
  variant?: 'primary';
  children?: ReactNode;
}

export default function AppButton({
  children,
  variant = 'primary',
  ...props
}: AppButtonProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      {() => <AppText>{children}</AppText>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.sm,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
  },
  primary: {
    height: 56,
  },
  pressed: {
    opacity: 0.2,
  },
});
