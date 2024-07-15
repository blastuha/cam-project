import React from 'react';
import styles from './SignInForm.module.scss';

const SignInForm = () => {
  return (
    <form className={styles.signInForm}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
    </form>
  );
};

export default SignInForm;
