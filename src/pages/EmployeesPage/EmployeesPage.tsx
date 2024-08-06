import React from 'react';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';

import { EmployeesTableBody } from '@components/tables/EmployeesTable/EmployeesTableBody/EmployeesTableBody';
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
import DeleteConfirmationDialog from '@components/modals/DeleteConfirmationDialog';

export const EmployeesPage = () => {
  const [selectedEmployeeId, setSelectedEmployeeId] = React.useState<
    string | undefined
  >(undefined);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const { data: allEmployees = [], isFetching: isAllEmployeesFetching } =
    useQuery({
      queryKey: ['employees'],
      queryFn: getAllEmployees,
    });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleEmpoloyeeIcon = (employeeId: string | undefined) => {
    if (employeeId) {
      navigate(`/employee/${employeeId}`);
    }
  };

  const handleEditIcon = (employeeId: string | undefined) => {
    if (employeeId) {
      navigate(`/employees/edit-employee/${employeeId}`);
    }
  };

  const handleAddEmployee = () => {
    navigate(`/employees/add-employee`);
  };

  const allEmployeesMutation = useMutation({
    mutationFn: (id: string | undefined) => deleteEmployee(id),
    onSuccess: () => {
      // Обновление списка сотрудников после удаления
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });

  const handleDialogClose = (confirm: boolean) => {
    if (confirm && selectedEmployeeId) {
      allEmployeesMutation.mutate(selectedEmployeeId);
    }
    setDialogOpen(false);
    setSelectedEmployeeId(undefined);
  };

  const handleDialogOpen = (employeeId: string | undefined) => {
    setSelectedEmployeeId(employeeId);
    setDialogOpen(true);
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
      {isDialogOpen && (
        <DeleteConfirmationDialog
          isDialogOpen={isDialogOpen}
          handleClose={handleDialogClose}
        />
      )}
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
              onDeleteIcon={handleDialogOpen}
              onEditIcon={handleEditIcon}
            />
          </EmployeesTable>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
