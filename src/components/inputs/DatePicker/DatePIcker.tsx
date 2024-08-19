import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';
import styles from './DatePicker.module.scss';
import { TextField } from '@mui/material';
import { Dayjs } from 'dayjs';

export const DatePIcker = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}) => {
  return (
    <div className={styles.datePicker}>
      <p>Дата начала периода</p>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        slots={{
          textField: (params) => <TextField {...params} fullWidth />,
        }}
      />
    </div>
  );
};
