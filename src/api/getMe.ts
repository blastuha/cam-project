import { ResponseSchema200 } from 'generated/openapi/main-api';

import { AxiosResponse } from 'axios';
import { userApi } from '../utils/api/api';

export const getMe = async () => {
  try {
    const response: AxiosResponse<ResponseSchema200> = await userApi.getMe();

    if (response.status === 200 && response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.error || 'Failed to fetch user data');
    }
  } catch (error) {
    console.error('Ошибка получения данных пользователя:', error);
    throw error;
  }
};
