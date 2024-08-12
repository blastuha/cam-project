import { analyzerApi } from '@utils/api/api';

export const getProcessingVideoStream = async (videoId: string | undefined) => {
  try {
    if (videoId) {
      const response = await analyzerApi.analyzerGetProcessStream(videoId);
      return response.data;
    } else {
      console.warn('В запросе getAllVideos не передан id');
    }
  } catch (err) {
    console.error('Ошибка в запросе getAllVideos:', err);
  }
};
