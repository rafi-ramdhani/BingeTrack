import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { createWatchlist, getWatchlistById, updateWatchlist } from '@/database';
import { useRootNavigation, useRootRoute } from '@/navigations';
import { colors, radii, spacing } from '@/themes';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WatchlistFormScreen = () => {
  const navigation = useRootNavigation();
  const route = useRootRoute<'WatchlistForm'>();
  const watchlistId = route.params?.watchlistId;

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!watchlistId) {
      return;
    }

    const watchlist = getWatchlistById(watchlistId);
    if (!watchlist) {
      setMessage('Watchlist not found.');
      return;
    }

    setTitle(watchlist.title);
    setRating(watchlist.rating?.toString() ?? '');
    setReview(watchlist.review ?? '');
  }, [watchlistId]);

  const handleSubmit = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setMessage('Title is required.');
      return;
    }

    const parsedRating =
      rating.trim() === '' ? null : Number.parseFloat(rating.trim());
    if (parsedRating !== null && Number.isNaN(parsedRating)) {
      setMessage('Rating must be a valid number.');
      return;
    }

    try {
      if (watchlistId) {
        updateWatchlist({
          id: watchlistId,
          title: trimmedTitle,
          rating: parsedRating,
          review: review.trim() || null,
        });
      } else {
        createWatchlist({
          title: trimmedTitle,
          rating: parsedRating,
          review: review.trim() || null,
        });
      }

      navigation.goBack();
    } catch (error) {
      console.error('Failed to save watchlist', error);
      setMessage('Failed to save watchlist.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppText>{watchlistId ? 'Edit Watchlist' : 'Create Watchlist'}</AppText>

      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor={colors.textMuted}
        autoFocus={!watchlistId}
        style={styles.input}
      />

      <TextInput
        value={rating}
        onChangeText={setRating}
        placeholder="Rating (optional)"
        placeholderTextColor={colors.textMuted}
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <TextInput
        value={review}
        onChangeText={setReview}
        placeholder="Review (optional)"
        placeholderTextColor={colors.textMuted}
        multiline
        style={[styles.input, styles.reviewInput]}
      />

      {message ? <AppText>{message}</AppText> : null}

      <AppButton onPress={handleSubmit}>Save</AppButton>
      <AppButton onPress={() => navigation.goBack()}>Cancel</AppButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    gap: spacing.md,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  reviewInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
});
