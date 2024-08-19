import { analyzerApi } from '@utils/api/api';

export const getUserVideos = async ({
  userId,
  date,
}: {
  userId: string | undefined;
  date: string | null;
}) => {
  try {
    if (userId && date) {
      const response = await analyzerApi.analyzerGetUserVideosUrls(
        userId,
        date
      );
      return response.data;
    } else {
      console.warn('В запросе getUserVideos не передан id или date');
    }
  } catch (err) {
    console.error('Ошибка в запросе getUserVideos:', err);
  }
};
