import React from 'react';
import { useParams } from 'react-router-dom';
import { employeesTableRowData } from '@utils/api/employeesTableRowData';
import styles from './EmployeePage.module.scss';

export const EmployeePage = () => {
  const { id } = useParams<{ id: string }>();

  const employeeData = employeesTableRowData.find(
    (employee) => employee.id === Number(id)
  );
  return (
    <div className={styles.employeePage}>
      <h1>Employee Page</h1>
      <p>Employee ID: {id}</p>
      <div className="">
        <img
          src={employeeData?.employeePhoto}
          alt=""
          style={{ width: '200px', height: '200px' }}
        />
      </div>

      <p>{employeeData?.fullName}</p>
      <p>{employeeData?.date}</p>
      <p>{employeeData?.phone}</p>
    </div>
  );
};
