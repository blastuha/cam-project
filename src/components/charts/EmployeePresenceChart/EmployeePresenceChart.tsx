import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer, // Импортируем ResponsiveContainer
} from 'recharts';
import { PageContainer } from '@components/containers/PageContainer/PageContainer';
import styles from './EmployeePresenceChart.module.scss';

type Employee = {
  title: string;
  user_id: string;
  total_time: number;
  total_percent: number;
  timings: Timing[];
};

type Timing = {
  id: string;
  track_id: number;
  data_group_name: string;
  dt_start: string;
  dt_end: string;
};

type Chart = {
  time: string;
  presence: number;
};

// Функция для преобразования данных в формат, подходящий для графика
const transformDataForChart = (timings: Timing[]) => {
  const chartData: Chart[] = [];

  timings?.forEach((timing) => {
    chartData.push({
      time: new Date(timing.dt_start).toLocaleTimeString(),
      presence: 1,
    });

    chartData.push({
      time: new Date(timing.dt_end).toLocaleTimeString(),
      presence: 0,
    });
  });

  return chartData;
};

export const EmployeePresenceChart = ({ employee }: { employee: Employee }) => {
  const chartData = transformDataForChart(employee.timings);

  return (
    <div className={styles.chartContainer}>
      <h1>График присутствия сотрудника</h1>
      <ResponsiveContainer width="100%" height={400}>
        {/* Используем ResponsiveContainer */}
        <AreaChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="presence"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
