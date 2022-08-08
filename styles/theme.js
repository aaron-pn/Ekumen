import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    custom: {
      main: '#9c27b0',
      light: '#ffa726',
      dark: '#ef6c00',
      contrastText: '#9c27b0',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: `
  //         @font-face {
  //           font-family: 'Raleway';
  //           font-style: normal;
  //           font-display: swap;
  //           font-weight: 400;
  //           src: local('Raleway'), local('Raleway-Regular'), url(}) format('woff2');
  //         }
  //       `,
  //     },
  //   },
})
