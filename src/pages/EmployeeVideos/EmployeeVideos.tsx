import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import styles from './EmployeeVideos.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { DatePIcker } from '@components/inputs/DatePicker/DatePIcker';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import dayjs, { Dayjs } from 'dayjs';
import { getUserVideos } from '@api/analyzer/getUserVideos';

export const EmployeeVideos = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const [videoList, setVideoList] = React.useState<string[] | null | undefined>(
    null
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedDate) return;

    const formattedDate = selectedDate.format('YYYY-MM-DD');

    setIsLoading(true);
    setError(null);

    try {
      const videos = await getUserVideos({ userId: id, date: formattedDate });
      setVideoList(videos?.data);
    } catch (err) {
      setError('Ошибка при загрузке видео');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <ContentCard>
        <ContentCard.Header>
          <ContentCard.HeaderTitle>Видео сотрудника</ContentCard.HeaderTitle>
        </ContentCard.Header>
        <ContentCard.Body>
          <form onSubmit={handleSubmit}>
            <DatePIcker
              label="Выберите дату"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
            <BlueButton type="submit">
              {isLoading ? 'Загрузка...' : 'Получить видео за выбранную дату'}
            </BlueButton>
          </form>

          {error && <p className={styles.error}>{error}</p>}

          {/* {videoList && (
            <div className={styles.videoList}>
              {videoList.map((video) => (
                <div key={video.id} className={styles.videoItem}>
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          )} */}
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
