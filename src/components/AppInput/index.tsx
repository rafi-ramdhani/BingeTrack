import { colors, radii, spacing } from '@/themes';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface AppInputProps extends TextInputProps {}

export const AppInput = ({ style, ...props }: AppInputProps) => {
  return <TextInput {...props} style={[styles.base, style]} />;
};

const styles = StyleSheet.create({
  base: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
