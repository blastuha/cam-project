import React, { ChangeEvent } from 'react';
import styles from './AuthPage.module.scss';
import SignInForm from './components/SignInForm/SignInForm';
import { CompanyIcon } from '@components/icons';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { logIn } from '@api/logIn';

export const AuthPage = () => {
  const [loginData, setLoginData] = React.useState({
    username: '',
    password: '',
  });

  const handleLoginTest = async () => {
    try {
      await logIn({
        username: loginData.username,
        password: loginData.password,
      });
    } catch (err) {
      console.warn('Login error:', err);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log('name,value', { name: name, value: value });
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  console.log('loginData', loginData);

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
        <SignInForm onChange={handleInputChange} />
        <BlueButton onClick={handleLoginTest}>Войти</BlueButton>
      </div>
    </div>
  );
};
