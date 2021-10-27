import { LocaleProvider,  } from "./hooks/Locale";
import {GlobalStyle} from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <LocaleProvider>
      <GlobalStyle />
      <Home />
    </LocaleProvider>
  );
}

export default App;
