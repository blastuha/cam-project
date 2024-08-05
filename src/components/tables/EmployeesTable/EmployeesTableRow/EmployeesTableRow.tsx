import React from 'react';
import styles from './EmployeesTableRow.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';
import { UserGetAllSchema } from 'generated/openapi/main-api';
import { Chip } from '@mui/material';

type EmployeesTableBodyProps = {
  allEmployees: UserGetAllSchema[];
  onEmployeeIcon: (id: number | undefined) => void;
  onDelete: (id: string | undefined) => void;
};

export const EmployeesTableBody: React.FC<EmployeesTableBodyProps> = ({
  onEmployeeIcon,
  allEmployees,
  onDelete,
}) => {
  return (
    <tbody>
      {allEmployees.map((employee) => {
        return (
          <tr className={styles.employeesTableRow} key={employee.id}>
            {/* <td className={styles.photoCell}>
              <img src={employee.} alt="photo" />
            </td> */}
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
                onClick={() => onEmployeeIcon(Number(employee?.id))}
              />
              <EditIcon className={styles.actionIcon} />
              <DeleteIcon
                className={styles.actionIcon}
                onClick={() => onDelete(employee?.id)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
