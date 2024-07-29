import React from 'react';
import styles from './BlueButton..module.scss';

export const BlueButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className={styles.blueButton} onClick={onClick}>
      {children}
    </button>
  );
};
