import React from 'react';
import styles from './MainCardBody.module.scss';

export const MainCardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.mainCardBody}>{children}</div>;
};
