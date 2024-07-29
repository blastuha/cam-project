import React from 'react';
import styles from './PageContainer.module.scss';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.pageContainer}>{children}</div>;
};
