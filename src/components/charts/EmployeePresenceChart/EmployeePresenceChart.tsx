import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import styles from './EmployeePresenceChart.module.scss';
import {
  UserInVideoDataGroupData,
  UserInVideoOneSchema,
} from '@generated/openapi/main-api';

type Chart = {
  time: string;
  presence: number;
};

const transformDataForChart = (timings: UserInVideoOneSchema[]) => {
  const chartData: Chart[] = [];

  timings?.forEach((timing) => {
    chartData.push({
      time: new Date(timing.dt_start).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      presence: 1,
    });

    chartData.push({
      time: new Date(timing.dt_end).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      presence: 0,
    });
  });

  return chartData;
};

export const EmployeePresenceChart = ({
  employee,
}: {
  employee: UserInVideoDataGroupData;
}) => {
  const chartData = transformDataForChart(employee.timings);

  return (
    <div className={styles.chartContainer}>
      <h1>График присутствия на фрагменте</h1>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="time" tickMargin={12} />
          <YAxis ticks={[0, 1]} tickMargin={12} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="step" // Используем "step" для углов под 90 градусов
            dataKey="presence"
            stroke="#8884d8"
            fill="#c4ccf8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
