import { useNavigate, useParams } from 'react-router-dom';
import styles from './EmployeePage.module.scss';
import { getOneEmployee } from '@api/getOneEmployee';
import { useQuery } from '@tanstack/react-query';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { ImageContainer } from '@components/containers/ImageContainer/ImageContainer';
import noPhotoEmployee from '@assets/noPhotoEmployee.webp';
import { InputInfo } from '@components/displayComponents/InputInfo';
import { Box, Chip, Typography } from '@mui/material';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import Spinner from '@components/Spinner';

export const EmployeePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: employeeData, isFetching: isEmployeeFetching } = useQuery({
    queryKey: ['employees'],
    queryFn: () => getOneEmployee(id),
  });

  const handleEditButton = () => {
    navigate(`/employees/edit-employee/${id}`);
  };

  console.log('employeeData', employeeData);

  if (isEmployeeFetching) {
    return (
      <PageContainer>
        <Spinner />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ContentCard className="addEmployeeCard">
        <ContentCard.Header>
          <ContentCard.HeaderTitle>Страница сотрудника</ContentCard.HeaderTitle>
        </ContentCard.Header>
        <ContentCard.Body>
          <div className={styles.bodyContent}>
            <ImageContainer maxWidth="200px" height="200px" borderRadius="6px">
              <img
                src={
                  employeeData?.image ? employeeData?.image : noPhotoEmployee
                }
                alt="employeePhoto"
              />
            </ImageContainer>
            <div className={styles.infoGroup}>
              <Box sx={{ width: '100%', padding: 0 }}>
                <Typography
                  display="block"
                  gutterBottom
                  sx={{ color: 'secondary.main' }}
                >
                  Статус
                </Typography>
                <Chip
                  label={employeeData?.is_active ? 'Активен' : 'Неактивен'}
                  color={employeeData?.is_active ? 'primary' : 'secondary'}
                />
              </Box>
              <InputInfo
                labelTitle="Имя"
                text={employeeData?.first_name ?? ''}
              />
              <InputInfo
                labelTitle="Фамилия"
                text={employeeData?.last_name ?? ''}
              />
              <InputInfo
                labelTitle="Описание"
                text={employeeData?.description ?? ''}
                contentMinHegith="150px"
              />
            </div>
            <BlueButton type="button" onClick={handleEditButton}>
              Редактировать
            </BlueButton>
          </div>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
