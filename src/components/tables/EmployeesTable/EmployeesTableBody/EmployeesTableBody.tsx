import React from 'react';
import styles from './EmployeesTableBody.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';
import BarChartIcon from '@mui/icons-material/BarChart';
import { UserGetAllSchema } from 'generated/openapi/main-api';
import { Chip } from '@mui/material';

type EmployeesTableBodyProps = {
  allEmployees: UserGetAllSchema[];
  onEmployeeIcon: (id: string | undefined) => void;
  onDeleteIcon: (id: string | undefined) => void;
  onEditIcon: (id: string | undefined) => void;
  onAnalysisIcon: (id: string | undefined) => void;
};

export const EmployeesTableBody: React.FC<EmployeesTableBodyProps> = ({
  onEmployeeIcon,
  allEmployees,
  onDeleteIcon,
  onEditIcon,
  onAnalysisIcon,
}) => {
  if (allEmployees.length === 0)
    return (
      <tbody>
        <tr className={styles.noEmployeeRow}>
          <td colSpan={4}>В списке нет сотрудников</td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {allEmployees.map((employee) => {
        return (
          <tr className={styles.employeesTableRow} key={employee.id}>
            <td className={styles.firstNameCell}>
              <span>{employee.first_name}</span>
            </td>
            <td className={styles.lastNameCell}>
              <span>{employee.last_name}</span>
            </td>
            <td className={styles.statusCell}>
              <Chip
                label={employee.is_active ? 'Активен' : 'Выключен'}
                color={employee.is_active ? 'success' : 'error'}
              />
            </td>
            <td className={styles.actionsCell}>
              <AccountBoxIcon
                className={styles.actionIcon}
                onClick={() => onEmployeeIcon(employee?.id)}
              />
              <BarChartIcon
                className={styles.actionIcon}
                onClick={() => onAnalysisIcon(employee?.id)}
              />
              <EditIcon
                className={styles.actionIcon}
                onClick={() => onEditIcon(employee?.id)}
              />
              <DeleteIcon
                className={styles.actionIcon}
                onClick={() => onDeleteIcon(employee?.id)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
