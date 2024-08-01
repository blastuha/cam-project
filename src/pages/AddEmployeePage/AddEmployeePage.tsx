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
import { validateHeaderName } from 'http';

export const AddEmployeePage = () => {
  const [newEmployeeSchema, setNewEmployeeSchema] =
    React.useState<UserGetSchema>({
      first_name: '',
      last_name: '',
      is_active: true,
      description: '',
      image: '',
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

  const selectItems = [
    { text: 'Активный', value: 'true' },
    { text: 'Неактивный', value: 'false' },
  ];

  return (
    <PageContainer className="addEmployeePage">
      <ContentCard className="addEmployeeCard">
        <ContentCard.Header>
          <ContentCard.HeaderTitle>
            Добавление сотрудника
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

          <form className={styles.employeeForm}>
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
            <MuiSelect selectItems={selectItems} />
            {/* <FormGroup htmlFor="employeeDate" inputType="date" label="Дата" />
            <FormGroup htmlFor="test" inputType="text" label="Должность" /> */}
            <BlueButton onClick={() => {}}>Добавить</BlueButton>
          </form>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
