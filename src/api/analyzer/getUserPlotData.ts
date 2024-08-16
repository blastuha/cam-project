import { analyzerApi } from '@utils/api/api';

export const getUserPlotData = async ({
  userId,
  dateFrom,
  dateTo,
  workingHours,
}: {
  userId: string;
  dateFrom: string;
  dateTo: string;
  workingHours: string;
}) => {
  try {
    console.log('userId in query', userId);
    const response = await analyzerApi.analyzerGetUserPlotData(
      '666efe5b-6370-461d-ade3-3e38b7011cad',
      dateFrom,
      dateTo,
      Number(workingHours)
    );
    return response.data;
  } catch (err) {
    console.error('Ошибка в запросе getAllVideos:', err);
  }
};
