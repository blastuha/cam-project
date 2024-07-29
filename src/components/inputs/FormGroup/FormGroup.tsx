import React from 'react';
import styles from './FoarmGroup.module.scss';

export const FormGroup = ({
  htmlFor,
  placeholder,
  label,
  inputType,
}: {
  htmlFor: string;
  placeholder?: string;
  label: string;
  inputType: string;
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} type={inputType} placeholder={placeholder} />
    </div>
  );
};
