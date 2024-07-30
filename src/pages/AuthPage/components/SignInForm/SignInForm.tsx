import React from 'react';
import styles from './SignInForm.module.scss';
import { FormGroup } from '@components/inputs/FormGroup/FormGroup';

const SignInForm = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form className={styles.signInForm}>
      <FormGroup
        label="Username"
        htmlFor="username"
        inputType="text"
        onChange={onChange}
      />
      <FormGroup
        label="Password"
        htmlFor="password"
        inputType="password"
        onChange={onChange}
      />
    </form>
  );
};

export default SignInForm;
