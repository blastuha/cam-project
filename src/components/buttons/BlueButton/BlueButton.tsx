import React from 'react';
import styles from './BlueButton..module.scss';

export const BlueButton = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.blueButton}>{children}</button>;
};
