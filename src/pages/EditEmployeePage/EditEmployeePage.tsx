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
import styles from './EditEmployeePage.module.scss';
import { getOneEmployee } from '@api/getOneEmployee';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee } from '@api/editEmployee';
import { employeeStatusSelect } from '@utils/constants';

export const EditEmployeePage = () => {
  const { data: employeeData, isFetching: isEmployeeFetching } = useQuery({
    queryKey: ['employees'],
    queryFn: () => getOneEmployee(id),
  });
  const [employeePhoto, setEmployeePhoto] = React.useState(employeeData?.image);
  const [newEmployeeSchema, setNewEmployeeSchema] =
    React.useState<UserGetSchema>({
      first_name: employeeData?.first_name,
      last_name: employeeData?.last_name,
      is_active: employeeData?.is_active,
      description: employeeData?.description,
    });
  console.log('newEmployeeSchema', newEmployeeSchema);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Объединенная функция для изменения и загрузки фото
  const handlePhotoChangeAndUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const photo = reader.result as string;
        setNewEmployeeSchema((prevState) => ({
          ...prevState,
          image: photo,
        }));
        setEmployeePhoto(photo);
      };
      reader.readAsDataURL(file);
    }
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
    if (!employeeData?.id) {
      console.error('Не удалось получить ID сотрудника');
      return;
    }
    event.preventDefault();

    try {
      const response = await editEmployee({
        userId: employeeData?.id,
        first_name: newEmployeeSchema.first_name || null,
        last_name: newEmployeeSchema.last_name || null,
        is_active: newEmployeeSchema.is_active || false,
        description: newEmployeeSchema.description || null,
        image: newEmployeeSchema.image || null,
      });

      if (response?.success) {
        navigate(`/employee/${employeeData?.id}`);
      }

      return response;
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
    });
    setEmployeePhoto(
      employeeData?.image ? employeeData?.image : loadPhotoEmployee
    );
  }, [employeeData]);

  return (
    <PageContainer>
      <ContentCard className="addEmployeeCard">
        <ContentCard.Header>
          <ContentCard.HeaderTitle>
            {`Редактирование сотрудника ${
              employeeData?.first_name ? employeeData?.first_name : ''
            } ${employeeData?.last_name ? employeeData?.last_name : ''}`}
          </ContentCard.HeaderTitle>
        </ContentCard.Header>
        <ContentCard.Body className="addEmployeeBody">
          <div className={styles.addPhotoGroup}>
            <ImageContainer width="200px" height="200px" borderRadius="8px">
              <img src={employeePhoto} alt="alushka" />
            </ImageContainer>

            <div style={{ position: 'absolute', bottom: '0px', left: '158px' }}>
              <PhotoUploadInput onPhotoUpload={handlePhotoChangeAndUpload} />
            </div>
          </div>

          <form className={styles.employeeForm} onSubmit={handleSubmit}>
            <FormGroup
              htmlFor="employeeName"
              inputType="text"
              label="Имя"
              onChange={handleFirstNameChange}
              value={newEmployeeSchema?.first_name || ''}
            />
            <FormGroup
              htmlFor="employeeName"
              inputType="text"
              label="Фамилия"
              onChange={handleLastNameChange}
              value={newEmployeeSchema?.last_name || ''}
            />
            <MuiSelect
              selectItems={employeeStatusSelect}
              onChange={handleSelectChange}
              value={
                newEmployeeSchema?.is_active?.toString()
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
              InputLabelProps={{
                shrink: true,
              }}
            />

            <BlueButton type="submit">Сохранить</BlueButton>
          </form>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
