export const getToken = (): string | null => {
  const tokenString = localStorage.getItem('csrfToken');

  if (!tokenString) {
    return null;
  }

  const token = JSON.parse(tokenString);

  if (!token) {
    return null;
  }

  return token;
};
