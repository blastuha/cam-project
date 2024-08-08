import { analyzerApi } from '@utils/api/api';
import React from 'react';

export const getAllVideos = async () => {
  try {
    const response = await analyzerApi.analyzerGetAll();
    return response.data;
  } catch (err) {
    console.error('Ошибка в запросе getAllVideos:', err);
  }
};
