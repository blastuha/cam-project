import React from 'react';
import styles from './BlueButton..module.scss';

export const BlueButton = ({
  type,
  children,
  onClick,
  isDisabled,
}: {
  isDisabled?: boolean;
  type: 'submit' | 'reset' | 'button' | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={styles.blueButton}
      onClick={onClick}
      style={{
        backgroundColor: isDisabled ? 'var(--secondary)' : 'var(--primary)',
      }}
    >
      {children}
    </button>
  );
};
