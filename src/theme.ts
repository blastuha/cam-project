import { createTheme } from '@mui/material/styles';
import { blueButtonStyles } from '@styles/components/blueButton';

const baseTheme = createTheme({
  typography: {
    fontSize: 14,
    fontWeightRegular: 400,
    fontFamily:
      'Inter, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },

  palette: {
    primary: {
      main: '#3a57e8',
      light: '#c4ccf8',
      dark: '#0048b2',
      veryDark: '#001f4d',
    },
    secondary: {
      main: '#6c757d',
    },
    background: {
      default: '#F2F3F8',
      paper: '#ffffff',
    },
    error: {
      main: '#c03221',
    },
    success: {
      main: '#1aa053',
    },
  },
});

export const theme = createTheme({
  ...baseTheme,
  components: {
    MuiButton: blueButtonStyles(baseTheme),
  },
});

export default theme;
