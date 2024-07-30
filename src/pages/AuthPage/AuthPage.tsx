import React from 'react';
import styles from './AuthPage.module.scss';
import SignInForm from './components/SignInForm/SignInForm';
import { CompanyIcon } from '@components/icons';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { useQuery } from '@tanstack/react-query';
import { logIn } from '@api/index';

export const AuthPage = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ['auth'],
  //   queryFn: () => logIn(),
  // });

  const handleAuth = async () => {
    console.log(await logIn());
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
        <SignInForm />
        <BlueButton onClick={handleAuth}>Войти</BlueButton>
      </div>
    </div>
  );
};
