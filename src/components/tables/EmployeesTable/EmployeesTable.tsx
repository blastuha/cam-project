import React from 'react';
import styles from './EmployeesTable.module.scss';
import { EmployeesTableHeader } from './EmployeesTableHeader/EmployeesTableHeader';
import EmployeesTableRow from './EmployeesTableRow/EmployeesTableRow';

export const EmployeesTable = () => {
  return (
    <table className={styles.employeesTable}>
      <EmployeesTableHeader />
      <EmployeesTableRow />
    </table>
  );
};
