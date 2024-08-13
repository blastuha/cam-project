import React from 'react';
import styles from './VideoPage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getVideo } from '@api/analyzer/getVideo';
import { Chip } from '@mui/material';
import Spinner from '@components/Spinner';
import { getProcessingVideoStream } from '@api/analyzer/getProcessingVideoStream';
import { ImageContainer } from '@components/containers/ImageContainer/ImageContainer';
import processingImg from '@assets/tempImages/processingImg.jpg';
import tempResponse from './response.json';
import { EmployeePresenceChart } from '@components/charts/EmployeePresenceChart/EmployeePresenceChart';

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
  const tempFragmentsData = tempResponse.data.fragments;
  console.log('tempFragmentsData', tempFragmentsData);

  // const { data: procesingVideoData } = useQuery({
  //   queryKey: ['video', id],
  //   queryFn: () => getProcessingVideoStream(id),
  // });

  if (isLoading) {
    return (
      <PageContainer>
        <Spinner />
      </PageContainer>
    );
  }

  if (error) {
    return <PageContainer>Ошибка загрузки видео</PageContainer>;
  }

  if (!videoData) {
    return <PageContainer>Видео не найдено</PageContainer>;
  }

  return (
    <PageContainer>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <p className={styles.title}>Исходное видео {videoData.filename}</p>
          <video controls className={styles.videoPlayer}>
            <source src={videoData.filepath} type="video/mp4" />
            <p>Ваш браузер не поддерживает воспроизведение видео.</p>
          </video>

          <div className={styles.info}>
            <span className={styles.scannedDate}>
              Сканировано{' '}
              {`${
                videoData.scanned_at &&
                new Date(videoData.scanned_at).toLocaleDateString()
              }`}
            </span>
            <Chip
              sx={{ height: '18px' }}
              label={videoData.status}
              color={
                videoData.status === 'NEW'
                  ? 'primary'
                  : videoData.status === 'DONE'
                  ? 'success'
                  : videoData.status === 'PROCESSING'
                  ? 'error'
                  : 'primary'
              }
            />
          </div>
          <p className={styles.description}>
            {videoData.description || 'Описание отсутствует'}
          </p>
        </div>

        {videoData.status && videoData.status === 'PROCESSED' && (
          <div className={styles.processingBlock}>
            <p>Видео в процессе обработки</p>
            <div className={styles.imgBlock}>
              <Spinner position="absolute" />
              <img
                src={processingImg}
                // src={fullVideoData.data.video_data.result_video_filepath}
                alt="processing_img"
                className={styles.processingImg}
              />
            </div>
          </div>
        )}

        <EmployeePresenceChart employee={tempFragmentsData[0]} />
      </div>
    </PageContainer>
  );
};
