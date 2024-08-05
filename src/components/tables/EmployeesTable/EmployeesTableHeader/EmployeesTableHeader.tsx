import React from 'react';
import styles from './EmployeesTableHeader.module.scss';

const headerCells = ['Имя', 'Фамилия', 'Статус', 'Действия'];

export const EmployeesTableHeader = () => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        {headerCells.map((cell) => {
          return <th key={cell}>{cell}</th>;
        })}
      </tr>
    </thead>
  );
};
