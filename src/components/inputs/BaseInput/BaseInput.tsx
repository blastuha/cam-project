import React from 'react';
import styles from './BaseInput.module.scss';

export const BaseInput = ({
  placeholder,
  type,
}: {
  placeholder?: string;
  type: string;
}) => {
  return (
    <input type={type} className={styles.input} placeholder={placeholder} />
  );
};
