import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { linkTheme } from '@styles/components/linkTheme';

// Create a theme instance.
export const theme = createTheme({
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

  components: {
    MuiLink: linkTheme,
  },
});

export default theme;
