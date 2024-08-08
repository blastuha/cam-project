import React from 'react';
import styles from './VideoPage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getVideo } from '@api/analyzer/getVideo';
import { Chip } from '@mui/material';

export const VideoPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: fullVideoData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideo(id),
  });
  console.log('fullVideoData', fullVideoData);
  const videoData = fullVideoData?.data?.video_data;

  if (isLoading) {
    return <PageContainer>Загрузка...</PageContainer>;
  }

  if (error) {
    return <PageContainer>Ошибка загрузки видео</PageContainer>;
  }

  if (!videoData) {
    return <PageContainer>Видео не найдено</PageContainer>;
  }

  return (
    <PageContainer>
      <div className={styles.videoContainer}>
        <p className={styles.title}>Исходное видео {videoData.filename}</p>
        <video controls className={styles.videoPlayer}>
          <source
            src="http://localhost:9000/media/videos/camera17%28s1_c17%29%5B2024-06-05%2813-00-00%29_2024-06-05%2815-00-00%29%5D.mp4"
            type="video/mp4"
          />
          <p>Ваш браузер не поддерживает воспроизведение видео.</p>
        </video>

        <div className={styles.info}>
          <span className={styles.scannedDate}>Сканировано 08.08.2024</span>
          <Chip
            sx={{ height: '18px' }}
            label={videoData.status}
            color={'primary'}
          />
        </div>

        <p className={styles.description}>
          {videoData.description || 'Описание отсутствует'}
        </p>
      </div>
    </PageContainer>
  );
};
