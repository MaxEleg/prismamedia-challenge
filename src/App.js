import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import {Home} from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
