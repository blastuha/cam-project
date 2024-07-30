import React from 'react';
import styles from './FoarmGroup.module.scss';

export const FormGroup = ({
  htmlFor,
  placeholder,
  label,
  inputType,
  onChange,
}: {
  htmlFor: string;
  placeholder?: string;
  label: string;
  inputType: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
