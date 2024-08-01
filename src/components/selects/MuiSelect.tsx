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
}: {
  value: string;
  children: React.ReactNode;
  selectItems: {
    text: string;
    value: string;
  }[];
  onChange: (event: SelectChangeEvent) => void;
  labelId: string;
}) {
  return (
    <Box sx={{ minWidth: 120, outline: 'none' }}>
      <FormControl fullWidth>
        <InputLabel id={labelId ? labelId : 'labelId'}>Статус</InputLabel>
        <Select
          labelId="select"
          id={`${labelId ? labelId : 'labelId'}`}
          value={value}
          onChange={onChange}
          sx={{
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#eee', // Убирает стандартную обводку
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
          {selectItems.map((item) => (
            <MenuItem value={item.value}>{item.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
