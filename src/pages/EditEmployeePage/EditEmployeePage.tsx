import React from 'react';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { FormGroup } from '@components/inputs/FormGroup/FormGroup';
import loadPhotoEmployee from '@assets/noPhotoEmployee.webp';
import { ImageContainer } from '@components/containers/ImageContainer/ImageContainer';
import { PhotoUploadInput } from '@components/inputs/PhotoUploadInput/PhotoUploadInput';
import { UserGetSchema } from 'generated/openapi/main-api';
import { MuiSelect } from '@components/selects/MuiSelect';
import { SelectChangeEvent, TextField } from '@mui/material';
import { createEmployee } from '@api/createEmployee';
import styles from './EditEmployeePage.module.scss';
import { getOneEmployee } from '@api/getOneEmployee';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const selectItems = [
  { text: 'Активный', value: 'true' },
  { text: 'Неактивный', value: 'false' },
];

export const EditEmployeePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: employeeData, isFetching: isEmployeeFetching } = useQuery({
    queryKey: ['employees'],
    queryFn: () => getOneEmployee(id),
  });

  console.log('employeeData', employeeData);

  const [newEmployeeSchema, setNewEmployeeSchema] =
    React.useState<UserGetSchema>({
      first_name: employeeData?.first_name,
      last_name: employeeData?.last_name,
      is_active: employeeData?.is_active,
      description: employeeData?.description,
      image: employeeData?.image,
    });

  console.log('newEmployeeSchema', newEmployeeSchema);

  const handlePhotoUpload = (photo: string) => {
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      image: photo,
    }));
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      first_name: event.target.value,
    }));
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      last_name: event.target.value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    console.log('event.target.value', event.target.value);
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      is_active: event.target.value === 'true' ? true : false,
    }));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await createEmployee({
        firstName: newEmployeeSchema.first_name || null,
        lastName: newEmployeeSchema.last_name || null,
        isActive: newEmployeeSchema.is_active || false,
        description: newEmployeeSchema.description || null,
        image: newEmployeeSchema.image || null,
      });

      if (response?.success) {
        console.log('Пользователь успешно создан:', response.data);
      } else {
        console.error('Ошибка при создании пользователя:', response?.error);
      }
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
    }
  };

  React.useEffect(() => {
    setNewEmployeeSchema({
      first_name: employeeData?.first_name,
      last_name: employeeData?.last_name,
      is_active: employeeData?.is_active,
      description: employeeData?.description,
      image: employeeData?.image,
    });
  }, [employeeData]);

  return (
    <PageContainer className="addEmployeePage">
      <ContentCard className="addEmployeeCard">
        <ContentCard.Header>
          <ContentCard.HeaderTitle>
            {`Редактирование сотрудника "${employeeData?.first_name} ${employeeData?.last_name}"`}
          </ContentCard.HeaderTitle>
        </ContentCard.Header>
        <ContentCard.Body className="addEmployeeBody">
          <div className={styles.addPhotoGroup}>
            <ImageContainer width="200px" height="200px" borderRadius="8px">
              <img src={loadPhotoEmployee} alt="alushka" />
            </ImageContainer>

            <div style={{ position: 'absolute', bottom: '0px', left: '158px' }}>
              <PhotoUploadInput onPhotoUpload={handlePhotoUpload} />
            </div>
          </div>

          <form className={styles.employeeForm} onSubmit={handleSubmit}>
            <FormGroup
              htmlFor="employeeName"
              inputType="text"
              label="Имя"
              onChange={handleFirstNameChange}
              value={newEmployeeSchema?.first_name}
            />
            <FormGroup
              htmlFor="employeeName"
              inputType="text"
              label="Фамилия"
              onChange={handleLastNameChange}
              value={newEmployeeSchema?.last_name}
            />
            <MuiSelect
              selectItems={selectItems}
              onChange={handleSelectChange}
              value={
                newEmployeeSchema?.is_active
                  ? newEmployeeSchema?.is_active?.toString()
                  : ''
              }
              labelId="status"
              label="Статус"
            />
            <TextField
              id="description"
              label="Описание"
              multiline
              rows={4}
              variant="outlined"
              value={newEmployeeSchema.description}
              onChange={handleDescriptionChange}
              fullWidth
            />

            <BlueButton type="submit">Добавить</BlueButton>
          </form>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
