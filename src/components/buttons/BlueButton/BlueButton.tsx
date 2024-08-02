import React from 'react';
import styles from './BlueButton..module.scss';

export const BlueButton = ({
  type,
  children,
  onClick,
}: {
  type: 'submit' | 'reset' | 'button' | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button type={type} className={styles.blueButton} onClick={onClick}>
      {children}
    </button>
  );
};
