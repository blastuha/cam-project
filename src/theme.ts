// 'use client';
// import { Roboto } from 'next/font/google';
// import { createTheme } from '@mui/material/styles';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//   },
//   typography: {
//     fontFamily: roboto.style.fontFamily,
//   },
//   components: {
//     MuiAlert: {
//       styleOverrides: {
//         root: ({ ownerState }) => ({
//           ...(ownerState.severity === 'info' && {
//             backgroundColor: '#60a5fa',
//           }),
//         }),
//       },
//     },
//   },
// });

// export default theme;

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontSize: 14,
    fontWeightRegular: 400,
    fontFamily:
      'Inter, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  palette: {
    primary: {
      main: '#3a57e8',
    },
    background: {
      default: '#F2F3F8',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
