import Router from './router';
import { LocaleProvider,  } from "./hooks/Locale";
import {GlobalStyle} from './styles/global';



function App() {
  return (
    <LocaleProvider>
      <GlobalStyle />
      <Router />
    </LocaleProvider>
  );
}

export default App;
