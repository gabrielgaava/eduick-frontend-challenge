import React from "react";
// import {FormattedMessage} from 'react-intl';
import {PageBackground} from '../Home/styles';

import Navbar from '../../components/Navbar';

const Dashboard = (props) => {
  return (
    <PageBackground>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <h1>Dashboard</h1>
        </header>
      </div>
    </PageBackground>
  )
}

export default Dashboard;