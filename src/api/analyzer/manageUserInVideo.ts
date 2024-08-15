import { analyzerApi } from '@utils/api/api';
import React from 'react';

export const manageUserInVideo = async (
  timingsId: string[],
  userId: string | undefined
) => {
  try {
    if (timingsId && userId) {
      const response = await analyzerApi.analyzerManageUserInVideoData({
        user_id: userId,
        user_in_video_data_id: timingsId,
      });
      return response.data;
    } else {
      console.warn('В запросе manageUserInVideo не передан videoId или userId');
    }
  } catch (err) {
    console.error('Ошибка в запросе manageUserInVideo:', err);
  }
};
