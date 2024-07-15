import React from 'react';
import styles from './EmployeesTableRow.module.scss';
import employeePhoto from '@assets/tempImages/employeePhoto.png';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';

const EmployeesTableRow = () => {
  return (
    <tr className={styles.employeesTableRow}>
      <td
        style={{ width: '40px', height: '40px' }}
        className={styles.photoCell}
      >
        <img
          style={{ width: '40px', height: '40px' }}
          src={employeePhoto}
          alt="photo"
        />
      </td>
      <td
        style={{ minWidth: '180px', height: '20px' }}
        className={styles.fullNameCell}
      >
        <span>Шевнин Борис Борисович</span>
      </td>
      <td
        style={{ minWidth: '140px', height: '20px' }}
        className={styles.numberCell}
      >
        <span>+7-995-625-15-88</span>
      </td>
      <td
        style={{ minWidth: '100px', height: '20px' }}
        className={styles.dateCell}
      >
        <span>13.07.2024</span>
      </td>
      <td className={styles.actionsCell}>
        <DeleteIcon className={styles.actionIcon} />
        <AccountBoxIcon className={styles.actionIcon} />
        <EditIcon className={styles.actionIcon} />
      </td>
    </tr>
  );
};

export default EmployeesTableRow;
