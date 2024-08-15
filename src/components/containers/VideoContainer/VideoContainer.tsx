import React from 'react';
import styles from './VideoContainer.module.scss';
import { Chip } from '@mui/material';

export const VideoContainer = ({
  videoFileName,
  videoFilePath,
  videoScannedAt,
  videoStatus,
  videoDescription,
}: {
  videoFileName: string;
  videoFilePath: string;
  videoScannedAt: string;
  videoStatus: string;
  videoDescription: string | undefined | null;
}) => {
  return (
    <div className={styles.videoContainer}>
      <p className={styles.title}>Исходное видео {videoFileName}</p>
      <video controls className={styles.videoPlayer}>
        <source src={videoFilePath} type="video/mp4" />
        <p>Ваш браузер не поддерживает воспроизведение видео.</p>
      </video>

      <div className={styles.info}>
        <span className={styles.scannedDate}>
          Сканировано{' '}
          {`${videoScannedAt && new Date(videoScannedAt).toLocaleDateString()}`}
        </span>
        <Chip
          sx={{ height: '18px' }}
          label={videoStatus}
          color={
            videoStatus === 'NEW'
              ? 'primary'
              : videoStatus === 'PROCESSED'
              ? 'success'
              : videoStatus === 'IN PROGRESS'
              ? 'warning'
              : 'primary'
          }
        />
      </div>
      <p className={styles.description}>
        {videoDescription || 'Описание отсутствует'}
      </p>
    </div>
  );
};
