import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import {
  createWatchlist,
  deleteWatchlist,
  getAllWatchlists,
  type WatchlistItem,
} from '@/database';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors, radii, spacing } from '@/themes';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [watchlists, setWatchlists] = useState<WatchlistItem[]>([]);
  const [resultMessage, setResultMessage] = useState('');

  const loadWatchlists = () => {
    try {
      const items = getAllWatchlists();
      setWatchlists(items);
    } catch (error) {
      console.error('Failed to load watchlists', error);
      setResultMessage('Failed to load watchlists.');
    }
  };

  useEffect(() => {
    loadWatchlists();
  }, []);

  const handleCreateWatchlist = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setResultMessage('Please enter a title.');
      return;
    }

    try {
      const id = createWatchlist({ title: trimmedTitle });
      setTitle('');
      setResultMessage(`Created watchlist id: ${id}`);
      loadWatchlists();
    } catch (error) {
      console.error('Failed to create watchlist', error);
      setResultMessage('Failed to create watchlist.');
    }
  };

  const handleDeleteWatchlist = (id: number) => {
    const previousWatchlists = watchlists;
    setWatchlists(current => current.filter(item => item.id !== id));

    try {
      deleteWatchlist(id);
      setResultMessage(`Deleted watchlist id: ${id}`);
    } catch (error) {
      console.error('Failed to delete watchlist', error);
      setWatchlists(previousWatchlists);
      setResultMessage('Failed to delete watchlist.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Watchlist title"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />

      <AppButton onPress={handleCreateWatchlist}>Create Watchlist</AppButton>

      {resultMessage ? <AppText>{resultMessage}</AppText> : null}

      <AppText>All Watchlists</AppText>
      {watchlists.map(item => (
        <View key={item.id} style={styles.listItem}>
          <AppText>{item.title}</AppText>
          <AppText>{item.createdAt}</AppText>
          <Pressable
            onPress={() => handleDeleteWatchlist(item.id)}
            style={({ pressed }) => [
              styles.deleteButton,
              pressed && styles.deletePressed,
            ]}
          >
            <AppText>Delete</AppText>
          </Pressable>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.md,
    backgroundColor: colors.background,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    paddingHorizontal: spacing.md,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
  },
  listItem: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    padding: spacing.md,
    gap: spacing.xs,
  },
  deleteButton: {
    marginTop: spacing.xs,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: radii.xs,
  },
  deletePressed: {
    opacity: 0.5,
  },
});
