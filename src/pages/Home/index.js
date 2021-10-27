import React from "react";
// import {FormattedMessage} from 'react-intl';
import {PageBackground} from './styles';

import Navbar from '../../components/Navbar';

const Home = (props) => {
  return (
    <PageBackground>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    </PageBackground>
  )
}

export default Home;