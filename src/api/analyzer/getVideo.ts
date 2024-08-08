import { analyzerApi } from '@utils/api/api';
import React from 'react';

export const getVideo = async (id: string | undefined) => {
  try {
    if (id) {
      const response = await analyzerApi.analyzerGetOne(id);
      return response.data;
    } else {
      console.warn('В запросе getAllVideos не передан id');
    }
  } catch (err) {
    console.error('Ошибка в запросе getAllVideos:', err);
  }
};
