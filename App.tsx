import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log('hai');
    }
  }, [isOpen]);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => setIsOpen(prev => !prev)}
      >
        <Text>Open</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
