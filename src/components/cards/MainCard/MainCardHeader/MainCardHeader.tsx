import React from 'react';
import styles from './MainCardHeader.module.scss';

export const MainCardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.mainCardHeader}>{children}</div>;
};
