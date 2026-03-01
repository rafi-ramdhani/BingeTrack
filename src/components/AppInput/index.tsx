import { colors, radii, spacing } from '@/themes';
import { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface AppInputProps extends TextInputProps {}

export const AppInput = ({
  style,
  cursorColor,
  selectionColor,
  onFocus,
  onBlur,
  ...props
}: AppInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      {...props}
      cursorColor={cursorColor ?? colors.primary}
      selectionColor={selectionColor ?? colors.primary}
      onFocus={event => {
        setIsFocused(true);
        onFocus?.(event);
      }}
      onBlur={event => {
        setIsFocused(false);
        onBlur?.(event);
      }}
      style={[styles.base, isFocused && styles.focused, style]}
    />
  );
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
  focused: {
    borderColor: colors.primary,
  },
});
