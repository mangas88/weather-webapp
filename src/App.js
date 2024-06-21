import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import AppRouter from './router/AppRouter'
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* Importiamo anche gli stili globali */}
        <GlobalStyles/>
        {/* Qui mettiamo il router */}
        <AppRouter/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
