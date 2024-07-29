import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styles from './PhotoUploadInput.module.scss';

export const PhotoUploadInput = ({
  onPhotoUpload,
}: {
  onPhotoUpload: (photo: string) => void;
}) => {
  // const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // setPhoto(result);
        onPhotoUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.photoUploadInput}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="icon-button-file"
        type="file"
        onChange={handlePhotoChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      {/* {photo && (
        <img src={photo} alt="Uploaded" className={styles.uploadedPhoto} />
      )} */}
    </div>
  );
};
