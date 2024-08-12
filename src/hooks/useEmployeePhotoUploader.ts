import { UserGetSchema } from '@generated/openapi/main-api';
import { useState } from 'react';

export const useEmployeePhotoUploader = ({
  initialPhoto,
  setNewEmployeeSchema,
  setUploadError,
  setShowAlert,
}: {
  initialPhoto: string | null | undefined;
  setNewEmployeeSchema: React.Dispatch<React.SetStateAction<UserGetSchema>>;
  setUploadError: React.Dispatch<React.SetStateAction<string | null>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [photo, setPhoto] = useState<string | null | undefined>(initialPhoto);

  const handlePhotoChangeAndUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // Проверяем, является ли файл изображением
      if (!file.type.startsWith('image/')) {
        setShowAlert(true);
        setUploadError('Можно загружать только файлы формата изображения!');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const photo = reader.result as string;
        setPhoto(photo);
        setNewEmployeeSchema((prevState) => ({
          ...prevState,
          image: photo,
        }));
        setUploadError(null); // Сброс ошибки при успешной загрузке
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    photo,
    setPhoto,
    setShowAlert,
    handlePhotoChangeAndUpload,
  };
};
