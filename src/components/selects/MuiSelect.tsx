import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import theme from '../../theme';

export function MuiSelect({
  selectItems,
  onChange,
  value,
  labelId,
  label, // Добавляем label как параметр
  borderColor,
}: {
  value: string;
  selectItems: {
    text: string;
    value: string;
  }[];
  onChange: (event: SelectChangeEvent) => void;
  labelId: string;
  label: string;
  borderColor?: string;
}) {
  return (
    <Box sx={{ minWidth: 120, outline: 'none' }}>
      <FormControl fullWidth sx={{ minWidth: 120, outline: 'none' }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={labelId}
          value={value}
          label={label}
          onChange={onChange}
          sx={{
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: borderColor ? borderColor : 'auto', // Убирает стандартную обводку
              },
              '&:hover fieldset': {
                borderColor: theme.palette.primary.main, // Цвет обводки при наведении
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main, // Цвет обводки при фокусе
              },
            },
          }}
        >
          {selectItems.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
