import React from 'react';
import styles from './CompanyIcon.module.scss';

export const CompanyIcon = () => {
  return (
    <svg
      className={styles.companyIcon}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-0.757324"
        y="19.2427"
        width="28"
        height="4"
        rx="2"
        transform="rotate(-45 -0.757324 19.2427)"
        fill="#3a57e8"
      ></rect>
      <rect
        x="7.72803"
        y="27.728"
        width="28"
        height="4"
        rx="2"
        transform="rotate(-45 7.72803 27.728)"
        fill="#3a57e8"
      ></rect>
      <rect
        x="10.5366"
        y="16.3945"
        width="16"
        height="4"
        rx="2"
        transform="rotate(45 10.5366 16.3945)"
        fill="#3a57e8"
      ></rect>
      <rect
        x="10.5562"
        y="-0.556152"
        width="28"
        height="4"
        rx="2"
        transform="rotate(45 10.5562 -0.556152)"
        fill="#3a57e8"
      ></rect>
    </svg>
  );
};
