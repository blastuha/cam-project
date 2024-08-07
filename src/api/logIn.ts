import { LoginSchema } from '../generated/openapi/main-api';
import { userApi } from '../utils/api/api';

export const logIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const loginSchema: LoginSchema = {
    username,
    password,
  };

  try {
    const response = await userApi.login(loginSchema);

    const token = response.data.data.token;

    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      return response.data;
    } else {
      throw new Error('Login failed: No token returned');
    }
  } catch (error) {
    console.error('Ошибка входа:', error);
    throw error;
  }
};
