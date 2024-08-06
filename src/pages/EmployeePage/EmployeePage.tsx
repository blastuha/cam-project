import { useParams } from 'react-router-dom';
import styles from './EmployeePage.module.scss';
import { getOneEmployee } from '@api/getOneEmployee';
import { useQuery } from '@tanstack/react-query';

export const EmployeePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: employeeData, isFetching: isEmployeeFetching } = useQuery({
    queryKey: ['employees'],
    queryFn: () => getOneEmployee(id),
  });

  console.log('employeeData', employeeData);

  return (
    <div className={styles.employeePage}>
      <h1>Employee Page</h1>
      <p>Employee ID: {id}</p>
      <div className="">
        <img
          src={employeeData?.image ? employeeData.image : ''}
          alt=""
          style={{ width: '200px', height: '200px' }}
        />
      </div>

      <p>{employeeData?.first_name}</p>
      <p>{employeeData?.last_name}</p>
      <p>{employeeData?.is_active}</p>
    </div>
  );
};
