import React from 'react';
import styles from './BlueButton..module.scss';

export const BlueButton = ({ text }: { text: string }) => {
  return <button className={styles.blueButton}>{text}</button>;
};
