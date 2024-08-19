import React from 'react';
import styles from './AnalysisEmployeePage.module.scss';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import { ContentCard } from '@components/cards/ContentCard/ContentCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { BlueButton } from '@components/buttons/BlueButton/BlueButton';
import { useParams } from 'react-router-dom';
import { getUserPlotData } from '@api/analyzer/getUserPlotData';
import { UserInVideoDataPlotData } from '@generated/openapi/main-api';
import { EmployeeChartArray } from '@components/charts/EmployeeChartArray/EmployeeChartArray';

interface DateRange {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

export const AnalysisEmployeePage: React.FC = () => {
  const [analysisData, setAnalysisData] = React.useState<
    UserInVideoDataPlotData | null | undefined
  >(null);
  const [selectedDate, setSelectedDate] = React.useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [workingHours, setWorkingHours] = React.useState<string>('8');
  const { id: userId } = useParams<{ id: string }>();
  console.log('userId', userId);

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      startDate: newValue,
    }));
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      endDate: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedDate.startDate || !selectedDate.endDate) {
      console.error('Выберите даты начала и конца периода.');
      return;
    }

    const formattedStartDate = selectedDate.startDate.format(
      'YYYY-MM-DD HH:mm:ss'
    );
    const formattedEndDate = selectedDate.endDate.format('YYYY-MM-DD HH:mm:ss');

    try {
      if (userId) {
        const response = await getUserPlotData({
          userId: userId,
          dateFrom: formattedStartDate,
          dateTo: formattedEndDate,
          workingHours: workingHours || '8',
        });
        setAnalysisData(response?.data);
        console.log('Полученные данные:', response?.data);
      }
    } catch (error) {
      console.error('Ошибка при получении данных для графика:', error);
    }
  };

  return (
    <PageContainer>
      <ContentCard>
        <ContentCard.Header>
          <ContentCard.HeaderTitle>Анализ сотрудника</ContentCard.HeaderTitle>
        </ContentCard.Header>
        <ContentCard.Body>
          <div className={styles.bodyContent}>
            <form className={styles.analysisForm} onSubmit={handleSubmit}>
              <div className={styles.datePicker}>
                <p>Дата начала периода</p>
                <DatePicker
                  label="Выберите дату"
                  value={selectedDate.startDate}
                  onChange={handleStartDateChange}
                  slots={{
                    textField: (params) => <TextField {...params} fullWidth />,
                  }}
                />
              </div>
              <div className={styles.datePicker}>
                <p>Дата конца периода</p>
                <DatePicker
                  label="Выберите дату"
                  value={selectedDate.endDate}
                  onChange={handleEndDateChange}
                  slots={{
                    textField: (params) => <TextField {...params} fullWidth />,
                  }}
                />
              </div>
              <div className={styles.hoursPicker}>
                <p>Количество рабочих часов</p>
                <TextField
                  label="Введите число"
                  variant="outlined"
                  fullWidth
                  value={workingHours}
                  onChange={(event) => setWorkingHours(event.target.value)}
                />
              </div>

              <BlueButton type="submit">Построить график</BlueButton>
            </form>

            {/* Отображение гистограммы */}
            {analysisData && analysisData.plot_data && (
              <EmployeeChartArray data={analysisData.plot_data} />
            )}
          </div>
        </ContentCard.Body>
      </ContentCard>
    </PageContainer>
  );
};
