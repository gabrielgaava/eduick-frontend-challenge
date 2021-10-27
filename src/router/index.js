import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages :
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route>
          <div>
            <h1>404</h1>
            <span>Pagina não encontrada</span>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
