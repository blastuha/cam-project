import React, { ChangeEvent } from 'react';
import styles from './AuthPage.module.scss';
import SignInForm from './components/SignInForm/SignInForm';
import { CompanyIcon } from '@components/icons';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { logIn } from '@api/logIn';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

export const AuthPage = () => {
  const [loginData, setLoginData] = React.useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = React.useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await logIn({
        username: loginData.username,
        password: loginData.password,
      });

      if (response?.success) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage('Ошибка авторизации: ' + error);
      console.error('Ошибка входа:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setErrorMessage('');
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <div className={styles.companyBlock}>
          <div className={styles.logoWrapper}>
            <CompanyIcon />
          </div>
          <span>CompanyName</span>
        </div>
        <h1>Sign in</h1>
        {errorMessage && (
          <Alert severity="error" style={{ marginBottom: '16px' }}>
            {errorMessage}
          </Alert>
        )}
        <SignInForm onChange={handleInputChange} />
        <BlueButton onClick={handleLogin} type="button">
          Войти
        </BlueButton>
      </div>
    </div>
  );
};
