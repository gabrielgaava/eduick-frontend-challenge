import React from "react";
import {FormattedMessage} from 'react-intl'
import { useLocale } from "../../hooks/Locale";

const Home = (props) => {

  const { toogleLocale } = useLocale();

  return (
    <div>
      <div className="App">
        <header className="App-header">
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

          <button onClick={() => toogleLocale("en-US")}>English</button>
          <button onClick={() => toogleLocale("pt-BR")}>Portugues</button>
        </header>
      </div>
    </div>
  )
}

export default Home;