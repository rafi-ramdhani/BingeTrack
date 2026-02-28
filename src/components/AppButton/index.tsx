import { Pressable, PressableProps } from 'react-native';
import AppText from '../AppText';
import { ReactNode } from 'react';

interface AppButtonProps extends PressableProps {
  children?: ReactNode;
}

export default function AppButton({ children, ...props }: AppButtonProps) {
  return (
    <Pressable {...props}>
      <AppText>{children}</AppText>
    </Pressable>
  );
}
