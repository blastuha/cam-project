import React from 'react';
import styles from './PageContainer.module.scss';
import clsx from 'clsx';

export const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(styles.pageContainer, className && styles[className])}>
      {children}
    </div>
  );
};
