import React from 'react';
import styles from './EmployeesTableRow.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';

type EmployeesTableBodyProps = {
  employeesTableRowData: {
    id: number;
    employeePhoto: string;
    fullName: string;
    phone: string;
    date: string;
  }[];
  onEmployeeIcon: (id: number) => void;
};

export const EmployeesTableBody: React.FC<EmployeesTableBodyProps> = ({
  onEmployeeIcon,
  employeesTableRowData,
}) => {
  return (
    <tbody>
      {employeesTableRowData.map((employee) => {
        return (
          <tr className={styles.employeesTableRow} key={employee.id}>
            <td className={styles.photoCell}>
              <img src={employee.employeePhoto} alt="photo" />
            </td>
            <td className={styles.fullNameCell}>
              <span>{employee.fullName}</span>
            </td>
            <td className={styles.numberCell}>
              <span>{employee.phone}</span>
            </td>
            <td className={styles.dateCell}>
              <span>{employee.date}</span>
            </td>
            <td className={styles.actionsCell}>
              <AccountBoxIcon
                className={styles.actionIcon}
                onClick={() => onEmployeeIcon(employee.id)}
              />
              <EditIcon className={styles.actionIcon} />
              <DeleteIcon className={styles.actionIcon} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
