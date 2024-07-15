import React from 'react';
import styles from './EmployeesTable.module.scss';

type EmployeesTableProps = {
  children: React.ReactNode;
};

export const EmployeesTable: React.FC<EmployeesTableProps> = ({ children }) => {
  return <table className={styles.employeesTable}>{children}</table>;
};
