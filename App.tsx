import AppButton from '@/components/AppButton';
import { colors } from '@/themes';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log('hai');
    }
  }, [isOpen]);

  return (
    <View style={styles.container}>
      <AppButton onPress={() => setIsOpen(prev => !prev)}>Something</AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  button: {
    borderRadius: 8,
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  buttonPressed: {
    opacity: 0.2,
  },
});
