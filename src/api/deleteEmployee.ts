import { userApi } from '@utils/api/api';

export const deleteEmployee = async (user_id: string | undefined) => {
  try {
    if (user_id) {
      const response = await userApi._delete(user_id);
      return response.data;
    }
  } catch (err) {
    console.error(err);
  }
};
