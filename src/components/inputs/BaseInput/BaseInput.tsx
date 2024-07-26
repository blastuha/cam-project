import React from 'react';
import styles from './BaseInput.module.scss';

export const BaseInput = ({ placeholder }: { placeholder?: string }) => {
  return (
    <input type="email" className={styles.input} placeholder={placeholder} />
  );
};
