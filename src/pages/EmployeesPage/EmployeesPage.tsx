import React from 'react';
import styles from './EmployeesPage.module.scss';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

import EmployeesTableRow from '@components/tables/EmployeesTable/EmployeesTableRow/EmployeesTableRow';
import { EmployeesTableHeader } from '@components/tables/EmployeesTable/EmployeesTableHeader/EmployeesTableHeader';
import { useNavigate } from 'react-router-dom';
import { employeesTableRowData } from '@utils/api/employeesTableRowData';

export const EmployeesPage = () => {
  const navigate = useNavigate();

  const handleEmpoloyeeIconClick = (employeeId: number) => {
    navigate(`/employee/${employeeId}`);
  };

  return (
    <div className={styles.employeesPage}>
      <EmployeesTable>
        <EmployeesTableHeader />
        <EmployeesTableRow
          employeesTableRowData={employeesTableRowData}
          onEmployeeIcon={handleEmpoloyeeIconClick}
        />
      </EmployeesTable>
    </div>
  );
};
