import React from 'react';
import styles from './EmployeesTable.module.scss';
import { EmployeesTableHeader } from './EmployeesTableHeader/EmployeesTableHeader';
import EmployeesTableRow from './EmployeesTableRow/EmployeesTableRow';

type EmployeesTableProps = {
  employeesTableRowData: {
    employeePhoto: string;
    fullName: string;
    phone: string;
    date: string;
  }[];
};

export const EmployeesTable: React.FC<EmployeesTableProps> = ({
  employeesTableRowData,
}) => {
  return (
    <table className={styles.employeesTable}>
      <EmployeesTableHeader />
      <EmployeesTableRow employeesTableRowData={employeesTableRowData} />
    </table>
  );
};
