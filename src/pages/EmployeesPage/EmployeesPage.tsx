import React from 'react';
import styles from './EmployeesPage.module.scss';
import { EmployeesTable } from '@components/tables/EmployeesTable/EmployeesTable';
import employeePhoto from '@assets/tempImages/employeePhoto.png';

const employeesTableRowData = [
  {
    employeePhoto: employeePhoto,
    fullName: 'Шевнин Борис Борисович',
    phone: '+7-995-625-15-88',
    date: '13.07.2024',
  },
  {
    employeePhoto: employeePhoto,
    fullName: 'Галков Петр Алексеевич',
    phone: '+7-995-625-15-88',
    date: '15.07.2024',
  },
  {
    employeePhoto: employeePhoto,
    fullName: 'Галков Ваня Усович',
    phone: '+7-995-625-15-88',
    date: '14.07.2024',
  },
  {
    employeePhoto: employeePhoto,
    fullName: 'Скабелка Павел Васильевич',
    phone: '+7-995-625-15-88',
    date: '11.07.2024',
  },
  {
    employeePhoto: employeePhoto,
    fullName: 'Петухов Михаил Васерманович',
    phone: '+7-995-625-15-88',
    date: '13.07.2024',
  },
];

export const EmployeesPage = () => {
  return (
    <div className={styles.employeesPage}>
      <EmployeesTable employeesTableRowData={employeesTableRowData} />
    </div>
  );
};
