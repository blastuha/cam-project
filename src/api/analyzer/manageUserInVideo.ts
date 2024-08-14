import { analyzerApi } from '@utils/api/api';
import React from 'react';

export const manageUserInVideo = async (
  timingId: string | undefined,
  userId: string | undefined
) => {
  try {
    if (timingId && userId) {
      const response = await analyzerApi.analyzerManageUserInVideoData({
        user_id: userId,
        user_in_video_data_id: timingId,
      });
      return response.data;
    } else {
      console.warn('В запросе manageUserInVideo не передан videoId или userId');
    }
  } catch (err) {
    console.error('Ошибка в запросе manageUserInVideo:', err);
  }
};
