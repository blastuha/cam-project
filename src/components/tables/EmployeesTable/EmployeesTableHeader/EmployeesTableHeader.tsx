import React from 'react';
import styles from './EmployeesTableHeader.module.scss';

export const EmployeesTableHeader = () => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th>Фото</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Дата</th>
        <th>Действия</th>
      </tr>
    </thead>
  );
};
