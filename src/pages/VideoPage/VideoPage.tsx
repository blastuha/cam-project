import React from 'react';
import styles from './VideoPage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getVideo } from '@api/analyzer/getVideo';
import { Button, Chip, SelectChangeEvent } from '@mui/material';
import Spinner from '@components/Spinner';
import { getProcessingVideoStream } from '@api/analyzer/getProcessingVideoStream';
import { ImageContainer } from '@components/containers/ImageContainer/ImageContainer';
import { getToken } from '@utils/api/getToken';
import processingImg from '@assets/tempImages/processingImg.jpg';
import tempResponse from './response.json';
import { EmployeePresenceChart } from '@components/charts/EmployeePresenceChart/EmployeePresenceChart';
import { MuiSelect } from '@components/selects/MuiSelect';
import { manageUserInVideo } from '@api/analyzer/manageUserInVideo';

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

  const videoUsers = fullVideoData?.data.users || {}; // Объект сотрудников
  const videoData = fullVideoData?.data?.video_data;
  const fragments = fullVideoData?.data?.fragments || []; // Список фрагментов для графиков

  const [selectedUserId, setSelectedUserId] = React.useState<string>('');
  const [selectedTimingId, setSelectedTimingId] = React.useState<string>('');
  const [selectedTargetUserId, setSelectedTargetUserId] =
    React.useState<string>('');
  console.log('selectedTargetUserId', selectedTargetUserId);

  const unknownFragments = fragments.filter(
    (fragment) => fragment.user_id === 'None'
  );
  const timingOptions = unknownFragments.flatMap((fragment) =>
    fragment.timings.map((timing) => ({
      text: `Timing ${timing.dt_start} - ${timing.dt_end}`,
      value: timing.id,
    }))
  );

  // Преобразуем объект сотрудников в массив для селекта
  const userOptions = fragments.map((fragment) => ({
    text: `${fragment.title}`,
    value: fragment.user_id,
  }));

  const userOptions2 = Object.values(videoUsers).map((user) => ({
    text: `${user.first_name} ${user.last_name}`,
    value: user.id,
  }));

  const selectedFragment = fragments.find(
    (fragment) => fragment.user_id === selectedUserId
  );

  const handleUserChange = (event: SelectChangeEvent) => {
    setSelectedUserId(event.target.value);
  };

  const handleTimingChange = (event: SelectChangeEvent) => {
    setSelectedTimingId(event.target.value);
  };

  const handleTargetUserChange = (event: SelectChangeEvent) => {
    setSelectedTargetUserId(event.target.value);
  };

  const mutation = useMutation({
    mutationFn: () => manageUserInVideo(selectedTimingId, selectedTargetUserId),
    onSuccess: () => {
      console.log('Привязка успешно выполнена');
      // Можно добавить логику для обновления интерфейса после успешной привязки
    },
  });

  const handleBindClick = () => {
    if (selectedTargetUserId && selectedTimingId) {
      mutation.mutate();
    } else {
      console.warn('Не выбран пользователь для привязки или тайминг');
    }
  };

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
                  : videoData.status === 'PROCESSED'
                  ? 'success'
                  : videoData.status === 'IN PROGRESS'
                  ? 'warning'
                  : 'primary'
              }
            />
          </div>
          <p className={styles.description}>
            {videoData.description || 'Описание отсутствует'}
          </p>
        </div>

        {videoData.status && videoData.status === 'IN PROGRESS' && (
          <div className={styles.processingBlock}>
            <p>Видео в процессе обработки</p>
            <div className={styles.imgBlock}>
              <Spinner position="absolute" />
              <img
                src={videoData?.process_url ?? processingImg}
                alt="processing_img"
                className={styles.processingImg}
              />
            </div>
          </div>
        )}

        {videoData.status === 'PROCESSED' && (
          <video
            controls
            className={styles.videoPlayer}
            style={{ marginTop: '26px' }}
          >
            <source
              src={videoData.result_video_filepath ?? ''}
              type="video/mp4"
            />
            <p>Ваш браузер не поддерживает воспроизведение видео.</p>
          </video>
        )}

        <div style={{ marginTop: '40px', maxWidth: '300px' }}>
          <MuiSelect
            label={'Выберите фрагменты'}
            value={selectedUserId}
            onChange={handleUserChange}
            selectItems={userOptions}
            labelId="employee-select"
          />
        </div>

        {videoData.status === 'PROCESSED' && selectedFragment && (
          <EmployeePresenceChart employee={selectedFragment} />
        )}

        <div style={{ marginTop: '20px', maxWidth: '300px' }}>
          <MuiSelect
            label={'Выберите тайминг'}
            value={selectedTimingId}
            onChange={handleTimingChange}
            selectItems={timingOptions}
            labelId="timing-select"
          />
        </div>

        <div style={{ marginTop: '20px', maxWidth: '300px' }}>
          <MuiSelect
            label={'Выберите пользователя для привязки таймингов'}
            value={selectedTargetUserId}
            onChange={handleTargetUserChange}
            selectItems={userOptions2}
            labelId="target-user-select"
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleBindClick}
          style={{ marginTop: '20px' }}
        >
          Привязать
        </Button>
      </div>
    </PageContainer>
  );
};
