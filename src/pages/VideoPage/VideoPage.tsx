import React from 'react';
import styles from './VideoPage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getVideo } from '@api/analyzer/getVideo';
import { Button, Chip, SelectChangeEvent } from '@mui/material';
import Spinner from '@components/Spinner';

import processingImg from '@assets/tempImages/processingImg.jpg';
import { EmployeePresenceChart } from '@components/charts/EmployeePresenceChart/EmployeePresenceChart';
import { MuiSelect } from '@components/selects/MuiSelect';
import { manageUserInVideo } from '@api/analyzer/manageUserInVideo';
import { VideoContainer } from '@components/containers/VideoContainer/VideoContainer';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';

export const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: fullVideoData,
    isLoading,
    isFetching,
    error,
    refetch: fullVideoDataRefetch,
  } = useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideo(id),
  });
  console.log('fullVideoData', fullVideoData);

  const videoUsers = fullVideoData?.data.users || {};
  const videoData = fullVideoData?.data?.video_data;
  const fragments = fullVideoData?.data?.fragments || [];

  const [selectedUserId, setSelectedUserId] = React.useState<string>('');
  const [selectedTargetUserId, setSelectedTargetUserId] =
    React.useState<string>('');
  const [selectsBlockHeight, setSelectsBlockHeight] = React.useState<
    number | null
  >(null);

  const selectsBlockRef = React.useRef<HTMLDivElement>(null);

  // Преобразуем объект сотрудников в массив для селекта
  const fragmentsOptions = fragments.map((fragment) => ({
    text: fragment.title,
    value: fragment.user_id ?? '',
  }));

  const userOptions = Object.values(videoUsers).map((user) => ({
    text: `${user.first_name} ${user.last_name}`,
    value: user.id ?? '',
  }));

  const selectedFragment = fragments.find(
    (fragment) => fragment.user_id === selectedUserId
  );

  const handleUserChange = (event: SelectChangeEvent) => {
    setSelectedUserId(event.target.value);
  };

  const handleTargetUserChange = (event: SelectChangeEvent) => {
    setSelectedTargetUserId(event.target.value);
  };

  const mutation = useMutation({
    mutationFn: () => {
      const timingsId =
        selectedFragment?.timings
          .map((timing) => timing.id)
          .filter((id): id is string => !!id) || [];
      return manageUserInVideo(timingsId, selectedTargetUserId);
    },
    onSuccess: () => {
      fullVideoDataRefetch();
    },
  });

  const handleBindClick = () => {
    if (selectedTargetUserId && selectedFragment) {
      mutation.mutate();
    } else {
      console.warn('Не выбран пользователь для привязки или фрагмент');
    }
  };

  React.useEffect(() => {
    if (fragments.length > 0 && !selectedUserId) {
      setSelectedUserId(fragments[0].user_id ?? '');
    }
  }, [fragments, selectedUserId]);

  React.useEffect(() => {
    if (selectsBlockRef.current) {
      setSelectsBlockHeight(selectsBlockRef.current.offsetHeight);
    }
  }, [selectedUserId, selectedTargetUserId, isFetching]);

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
        {videoData.status && videoData.status !== 'PROCESSED' && (
          <VideoContainer
            videoDescription={videoData.description}
            videoFileName={videoData.filename}
            videoFilePath={videoData.filepath}
            videoScannedAt={videoData.scanned_at}
            videoStatus={videoData.status}
          />
        )}

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

        {videoData.status === 'PROCESSED' &&
          videoData.result_video_filepath && (
            <VideoContainer
              videoDescription={videoData.description}
              videoFileName={videoData.filename}
              videoFilePath={videoData.result_video_filepath}
              videoScannedAt={videoData.scanned_at}
              videoStatus={videoData.status}
            />
          )}

        {videoData.status === 'PROCESSED' && selectedFragment && (
          <EmployeePresenceChart employee={selectedFragment} />
        )}
        {isFetching ? (
          <div style={{ height: selectsBlockHeight ?? 'auto' }}>
            <Spinner />
          </div>
        ) : (
          videoData.status === 'PROCESSED' && (
            <div className={styles.selectsBlock} ref={selectsBlockRef}>
              <MuiSelect
                label={'Выберите фрагменты'}
                value={selectedUserId}
                onChange={handleUserChange}
                selectItems={fragmentsOptions}
                labelId="employee-select"
              />

              <MuiSelect
                label={'Привязать фрагменты'}
                value={selectedTargetUserId}
                onChange={handleTargetUserChange}
                selectItems={userOptions}
                labelId="target-user-select"
              />

              <BlueButton type="button" onClick={handleBindClick}>
                Привязать
              </BlueButton>
            </div>
          )
        )}
      </div>
    </PageContainer>
  );
};
