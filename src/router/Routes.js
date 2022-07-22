import React from 'react';
import {BrowserRouter as Router, NavLink, Switch,Route} from 'react-router-dom'
import Filme from '../pages/Filme';
import Home from '../pages/Home';
import '../index.css';

function RouterApp() {
  return (
    <Router>
      <header>
        {/* <nav> */}
          {/* <ul> */}
            <NavLink className="logo" to="/" exact>Inicio</NavLink>
            <NavLink className="favoritos" to="/filme">filme</NavLink>
          {/* </ul> */}
        {/* </nav> */}
      </header>

      <main>

      <Switch>
        
        <Route path="/" exact>
        <Home />
        </Route>

        <Route path="/filme" exact>
        <Filme />
        </Route>

        <Route path="/filme/:id" exact>
        <Filme />
        </Route>

        {/* <Router path="*">
        <PageNotFound/>
        </Router> */}

      </Switch>
      </main>
    </Router>
  );
}

export default RouterApp;
