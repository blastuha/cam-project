import React from 'react';
import styles from './FoarmGroup.module.scss';

export const FormGroup = ({
  htmlFor,
  placeholder,
  label,
}: {
  htmlFor: string;
  placeholder?: string;
  label: string;
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type="password" placeholder={placeholder} />
    </div>
  );
};
