export const getToken = (): string | null => {
  const tokenString = localStorage.getItem('csrfToken');

  if (!tokenString) {
    return null;
  }

  const tokenData = JSON.parse(tokenString);

  if (!tokenData) {
    return null;
  }

  const { token, expiresAt } = tokenData;
  const now = new Date().getTime();

  if (now >= expiresAt) {
    localStorage.removeItem('csrfToken');
    return null;
  }

  return token;
};
