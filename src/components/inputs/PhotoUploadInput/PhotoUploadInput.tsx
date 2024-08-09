import React from 'react';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styles from './PhotoUploadInput.module.scss';

export const PhotoUploadInput = ({
  onPhotoUpload,
}: {
  onPhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.photoUploadInput}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="icon-button-file"
        type="file"
        onChange={onPhotoUpload}
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
    </div>
  );
};
