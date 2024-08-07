import { userApi } from '../utils/api/api';

export const logOut = async () => {
  try {
    const response = await userApi.logout();
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
