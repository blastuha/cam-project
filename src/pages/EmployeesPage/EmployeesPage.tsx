import React from 'react';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

import { EmployeesTableBody } from '@components/tables/EmployeesTable/EmployeesTableRow/EmployeesTableRow';
import { EmployeesTableHeader } from '@components/tables/EmployeesTable/EmployeesTableHeader/EmployeesTableHeader';
import { useNavigate } from 'react-router-dom';
import { employeesTableRowData } from '@utils/api/employeesTableRowData';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';

export const EmployeesPage = () => {
  const navigate = useNavigate();

  const handleEmpoloyeeIconClick = (employeeId: number) => {
    navigate(`/employee/${employeeId}`);
  };

  return (
    <PageContainer>
      <ContentCard>
        <ContentCard.Header>
          <ContentCard.HeaderTitle>Список сотрудников</ContentCard.HeaderTitle>
          <ContentCard.HeaderAction>
            <BlueButton>Добавить сотрудника</BlueButton>
          </ContentCard.HeaderAction>
        </ContentCard.Header>
        <ContentCard.Body padding="16px 0 16px 0">
          <EmployeesTable>
            <EmployeesTableHeader />
            <EmployeesTableBody
              employeesTableRowData={employeesTableRowData}
              onEmployeeIcon={handleEmpoloyeeIconClick}
            />
          </EmployeesTable>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
