import { userApi } from '@utils/api/api';

export const getOneEmployee = async (userId: string | undefined) => {
  try {
    if (!userId) {
      console.error('getOneEmployee: User ID is required');
      return;
    }

    const response = await userApi.getUser(userId);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};
