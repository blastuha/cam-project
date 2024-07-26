import { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    veryDark?: string;
  }

  interface SimplePaletteColorOptions {
    veryDark?: string;
  }
}
