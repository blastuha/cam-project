import { userApi } from '@utils/api/api';

export const getAllEmployees = async () => {
  try {
    const response = await userApi.getAll();
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};
