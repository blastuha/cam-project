import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from './EmployeeChartArray.module.scss';

interface EmployeePresenceChartProps {
  data: {
    x: string[];
    y: number[];
  };
}

const transformDataForChart = (x: string[], y: number[]) => {
  return x.map((time, index) => ({
    date: new Date(time).toLocaleDateString([], {
      day: '2-digit',
      month: '2-digit',
    }),
    presence: y[index],
  }));
};

export const EmployeeChartArray: React.FC<EmployeePresenceChartProps> = ({
  data,
}) => {
  const chartData = transformDataForChart(data.x, data.y);

  console.log('data', data);

  return (
    <div className={styles.chartContainer}>
      <h2>График присутствия сотрудника на видео</h2>
      <ResponsiveContainer height={400} width={'100%'}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickMargin={10}
            interval={0} // Увеличиваем шаг для меток
          />
          <YAxis ticks={[0.01]} tickMargin={10} />
          <Tooltip />
          <Bar dataKey="presence" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
