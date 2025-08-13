import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import MainLayout from './layouts/MainLayout';
import { darkTheme, theme } from './theme';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { isDark } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
