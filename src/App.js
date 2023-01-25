import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';
import './App.css';
import CvBuild from './pages/cvbuilding/cvbuild.component';
import Pentabell from './fonts/Pentabell-Regular.ttf';

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: 'Pentabell',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Pentabell';
            src: local('Pentabell'), url(${Pentabell});
          }
        `,
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CvBuild />
    </ThemeProvider>

  );
}

export default App;
