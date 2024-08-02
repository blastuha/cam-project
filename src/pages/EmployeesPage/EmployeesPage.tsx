import React from 'react';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

import { EmployeesTableBody } from '@components/tables/EmployeesTable/EmployeesTableRow/EmployeesTableRow';
import { EmployeesTableHeader } from '@components/tables/EmployeesTable/EmployeesTableHeader/EmployeesTableHeader';
import { useNavigate } from 'react-router-dom';
import { employeesTableRowData } from '@utils/api/employeesTableRowData';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { getAllEmployees } from '@api/getAllEmployees';
import { VideoGetAllSchema } from 'generated/openapi/main-api';

export const EmployeesPage = () => {
  const [allEmployees, setAllEmployees] = React.useState<VideoGetAllSchema[]>(
    []
  );

  console.log('allEmployees', allEmployees);

  const navigate = useNavigate();

  const handleEmpoloyeeIcon = (employeeId: number) => {
    navigate(`/employee/${employeeId}`);
  };

  const handleAddEmployee = () => {
    navigate(`/employees/add-employee`);
  };

  React.useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const response = await getAllEmployees();
        setAllEmployees(response?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllEmployees();
  }, []);

  console.log('allEmployees', allEmployees);

  return (
    <PageContainer>
      <ContentCard>
        <ContentCard.Header>
          <ContentCard.HeaderTitle>Список сотрудников</ContentCard.HeaderTitle>
          <ContentCard.HeaderAction>
            <BlueButton type="button" onClick={handleAddEmployee}>
              Добавить сотрудника
            </BlueButton>
          </ContentCard.HeaderAction>
        </ContentCard.Header>
        <ContentCard.Body padding="16px 0 16px 0">
          <EmployeesTable>
            <EmployeesTableHeader />
            <EmployeesTableBody
              employeesTableRowData={employeesTableRowData}
              onEmployeeIcon={handleEmpoloyeeIcon}
            />
          </EmployeesTable>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
