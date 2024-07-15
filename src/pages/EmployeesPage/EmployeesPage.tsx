import React from 'react';
import styles from './EmployeesPage.module.scss';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

export const EmployeesPage = () => {
  return (
    <div className={styles.employeesPage}>
      <EmployeesTable />
    </div>
  );
};
