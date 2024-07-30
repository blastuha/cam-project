import React from 'react';
import styles from './SignInForm.module.scss';
import { FormGroup } from '@components/inputs/FormGroup/FormGroup';

const SignInForm = () => {
  return (
    <form className={styles.signInForm}>
      <FormGroup label="Email" htmlFor="email" inputType="email" />
      <FormGroup label="Password" htmlFor="password" inputType="password" />
    </form>
  );
};

export default SignInForm;
