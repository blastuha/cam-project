import React from 'react';
import styles from './MainCard.module.scss';
import { MainCardHeader } from './MainCardHeader/MainCardHeader';
import { MainCardBody } from './MainCardBody/MainCardBody';

export const MainCard = ({
  headerContent,
  bodyContent,
}: {
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
}) => {
  return (
    <div className={styles.mainCard}>
      <MainCardHeader>{headerContent}</MainCardHeader>
      <MainCardBody>{bodyContent}</MainCardBody>
    </div>
  );
};
