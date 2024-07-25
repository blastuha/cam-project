import React from 'react';
import styles from './EmployeesPage.module.scss';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

import EmployeesTableRow from '@components/tables/EmployeesTable/EmployeesTableRow/EmployeesTableRow';
import { EmployeesTableHeader } from '@components/tables/EmployeesTable/EmployeesTableHeader/EmployeesTableHeader';
import { useNavigate } from 'react-router-dom';
import { employeesTableRowData } from '@utils/api/employeesTableRowData';
import { MainCard } from '@components/cards/MainCard/MainCard';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';

export const EmployeesPage = () => {
  const navigate = useNavigate();

  const handleEmpoloyeeIconClick = (employeeId: number) => {
    navigate(`/employee/${employeeId}`);
  };

  return (
    <div className={styles.employeesPage}>
      <ContentCard>
        <ContentCard.Header>
          <ContentCard.HeaderTitle>Список сотрудников</ContentCard.HeaderTitle>
          <ContentCard.HeaderAction>
            Добавить сотрудника
          </ContentCard.HeaderAction>
        </ContentCard.Header>
        <ContentCard.Body padding="16px 0 16px 0">
          <EmployeesTable>
            <EmployeesTableHeader />
            <EmployeesTableRow
              employeesTableRowData={employeesTableRowData}
              onEmployeeIcon={handleEmpoloyeeIconClick}
            />
          </EmployeesTable>
        </ContentCard.Body>
      </ContentCard>
      {/* <MainCard
        headerContent={<div>Header</div>}
        bodyContent={<div>Body</div>}
      /> */}

      {/* <EmployeesTable>
        <EmployeesTableHeader />
        <EmployeesTableRow
          employeesTableRowData={employeesTableRowData}
          onEmployeeIcon={handleEmpoloyeeIconClick}
        />
      </EmployeesTable> */}
    </div>
  );
};
