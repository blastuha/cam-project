import React from 'react';
import styles from './AuthPage.module.scss';
import SignInForm from './components/SignInForm/SignInForm';
import { CompanyIcon } from '@components/icons';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';

export const AuthPage = () => {
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
        <BlueButton>Войти</BlueButton>
      </div>
    </div>
  );
};
