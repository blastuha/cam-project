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

// type LogInReponse = {
//   success: boolean;
//   data: {
//     token: string;
//   };
//   error: null | string;
// };

// export const logIn = ({
//   username,
//   password,
// }: {
//   username: string;
//   password: string;
// }) => {
//   const url = '/api/v1/user/login';

//   return axios.post<LogInReponse>(
//     url,
//     {
//       username,
//       password,
//     },
//     {
//       headers: {
//         accept: 'application/json',
//         'Content-Type': 'application/json',
//         'X-CSRFToken':
//           'jQahDMRXbpZp8aEFqbuQ5rZk8kE1TdN4zyitNpVHA52yA3TrrLsUdPFzwfylUK2y',
//       },
//     }
//   );
// };
