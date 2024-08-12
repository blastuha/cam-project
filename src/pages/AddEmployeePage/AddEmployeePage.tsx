import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { FormGroup } from '@components/inputs/FormGroup/FormGroup';
import loadPhotoEmployee from '@assets/noPhotoEmployee.webp';
import React from 'react';
import styles from './AddEmployeePage.module.scss';
import { ImageContainer } from '@components/containers/ImageContainer/ImageContainer';
import { PhotoUploadInput } from '@components/inputs/PhotoUploadInput/PhotoUploadInput';
import { UserGetSchema } from 'generated/openapi/main-api';
import { MuiSelect } from '@components/selects/MuiSelect';
import { Alert, SelectChangeEvent, Snackbar, TextField } from '@mui/material';
import { createEmployee } from '@api/createEmployee';
import { employeeStatusSelect } from '@utils/constants';
import { useNavigate } from 'react-router-dom';
import { useEmployeePhotoUploader } from '@hooks/useEmployeePhotoUploader';

export const AddEmployeePage = () => {
  const [newEmployeeSchema, setNewEmployeeSchema] =
    React.useState<UserGetSchema>({
      first_name: '',
      last_name: '',
      is_active: true,
      description: '',
      image: '',
    });
  const [showAlert, setShowAlert] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);

  // Переменные состояния для ошибок валидации
  const [firstNameError, setFirstNameError] = React.useState<string | null>(
    null
  );
  const [lastNameError, setLastNameError] = React.useState<string | null>(null);

  const { photo: employeePhoto, handlePhotoChangeAndUpload } =
    useEmployeePhotoUploader({
      initialPhoto: newEmployeeSchema?.image,
      setNewEmployeeSchema: setNewEmployeeSchema,
      setUploadError,
      setShowAlert,
    });

  const navigate = useNavigate();

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      first_name: event.target.value,
    }));
    if (event.target.value) {
      setFirstNameError(null); // Очистка ошибки при вводе
    }
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmployeeSchema((prevState) => ({
      ...prevState,
      last_name: event.target.value,
    }));
    if (event.target.value) {
      setLastNameError(null); // Очистка ошибки при вводе
    }
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
    event.preventDefault();

    // Проверка на пустые поля
    if (!newEmployeeSchema.first_name) {
      setFirstNameError('Имя не может быть пустым');
      setShowAlert(true);
      return;
    }
    if (!newEmployeeSchema.last_name) {
      setLastNameError('Фамилия не может быть пустой');
      setShowAlert(true);
      return;
    }

    try {
      const response = await createEmployee({
        firstName: newEmployeeSchema.first_name || null,
        lastName: newEmployeeSchema.last_name || null,
        isActive: newEmployeeSchema.is_active || false,
        description: newEmployeeSchema.description || null,
        image: newEmployeeSchema.image || null,
      });

      if (response?.success) {
        navigate(`/employee/${response?.data.id}`);
      } else {
        setUploadError('Ошибка при создании пользователя.');
        setShowAlert(true);
      }

      return response;
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
      setUploadError('Произошла ошибка при создании пользователя.');
      setShowAlert(true);
    }
  };

  return (
    <PageContainer className="addEmployeePage">
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {uploadError || firstNameError || lastNameError}
        </Alert>
      </Snackbar>
      <ContentCard className="addEmployeeCard">
        <ContentCard.Header>
          <ContentCard.HeaderTitle>
            Добавление сотрудника
          </ContentCard.HeaderTitle>
        </ContentCard.Header>
        <ContentCard.Body className="addEmployeeBody">
          <div className={styles.addPhotoGroup}>
            <ImageContainer width="200px" height="200px" borderRadius="8px">
              <img
                src={employeePhoto ? employeePhoto : loadPhotoEmployee}
                alt="employeePhoto"
              />
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
            />
            <FormGroup
              htmlFor="employeeName"
              inputType="text"
              label="Фамилия"
              onChange={handleLastNameChange}
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
            />

            <BlueButton isDisabled={uploadError ? true : false} type="submit">
              Сохранить
            </BlueButton>
          </form>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
