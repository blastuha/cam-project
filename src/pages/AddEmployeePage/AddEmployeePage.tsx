import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { FormGroup } from '@components/inputs/FormGroup/FormGroup';
import loadPhotoEmployee from '@assets/noPhotoEmployee.webp';
import React from 'react';
import styles from './AddEmployeePage.module.scss';
import { ImageContainer } from '@components/containers/ImageContainer/ImageContainer';
import { PhotoUploadInput } from '@components/inputs/PhotoUploadInput/PhotoUploadInput';

export const AddEmployeePage = () => {
  const [uploadedPhoto, setUploadedPhoto] = React.useState(loadPhotoEmployee);

  const handlePhotoUpload = (photo: string) => {
    setUploadedPhoto(photo);
  };

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
            <FormGroup htmlFor="employeeName" inputType="text" label="ФИО" />
            <FormGroup
              htmlFor="employeeNumber"
              inputType="text"
              label="Телефон"
              placeholder="+7-999-333-22-00"
            />
            <FormGroup htmlFor="employeeDate" inputType="date" label="Дата" />
            <FormGroup htmlFor="test" inputType="text" label="Должность" />
            <BlueButton onClick={() => {}}>Добавить</BlueButton>
          </form>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
