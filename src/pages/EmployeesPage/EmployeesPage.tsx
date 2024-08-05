import React from 'react';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

import { EmployeesTableBody } from '@components/tables/EmployeesTable/EmployeesTableRow/EmployeesTableRow';
import { EmployeesTableHeader } from '@components/tables/EmployeesTable/EmployeesTableHeader/EmployeesTableHeader';
import { useNavigate } from 'react-router-dom';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { getAllEmployees } from '@api/getAllEmployees';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEmployee } from '@api/deleteEmployee';
import { useQueryClient } from '@tanstack/react-query';
import Spinner from '@components/Spinner';

export const EmployeesPage = () => {
  const { data: allEmployees = [], isFetching: isAllEmployeesFetching } =
    useQuery({
      queryKey: ['employees'],
      queryFn: getAllEmployees,
    });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const allEmployeesMutation = useMutation({
    mutationFn: (id: string | undefined) => deleteEmployee(id),
    onSuccess: () => {
      // Обновление списка сотрудников после удаления
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });

  const handleEmpoloyeeIcon = (employeeId: number | undefined) => {
    if (employeeId) {
      navigate(`/employee/${employeeId}`);
    }
  };

  const handleAddEmployee = () => {
    navigate(`/employees/add-employee`);
  };

  if (isAllEmployeesFetching) {
    return (
      <PageContainer>
        <Spinner />;
      </PageContainer>
    );
  }

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
              allEmployees={allEmployees}
              onEmployeeIcon={handleEmpoloyeeIcon}
              onDelete={(id: string | undefined) =>
                allEmployeesMutation.mutate(id)
              }
            />
          </EmployeesTable>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
