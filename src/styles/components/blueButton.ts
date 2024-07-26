import React from 'react';
import { Theme } from '@mui/material/styles';

// тестовый компонент для примера как стилизовать mui компоненты
export const blueButtonStyles = (theme: Theme) => ({
  styleOverrides: {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      '&:hover': {
        backgroundColor: 'darkblue',
      },
    },
    // contained: {
    //   backgroundColor: 'blue',
    //   '&:hover': {
    //     backgroundColor: 'darkblue',
    //   },
    // },
  },
});
