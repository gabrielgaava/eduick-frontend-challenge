import logo from './logo.svg';
import { LocaleProvider, useLocale } from "./hooks/Locale";
import {FormattedMessage} from 'react-intl'
import './App.css';

function App() {

  const { selectLocale } = useLocale();

  return (
    <LocaleProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage 
              id="home.title"
              defaultMessage="Não carregou!"
            />
            <br />
            <FormattedMessage 
              id="home.name"
              defaultMessage="Não carregou!"
              values={{ userName: "Gabriel Gava" }}
            />
            <br />
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button onClick={() => selectLocale("en-US")}>English</button>
          <button onClick={() => selectLocale("pt-BR")}>Portugues</button>
        </header>
      </div>
    </LocaleProvider>
  );
}

export default App;
