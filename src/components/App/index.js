import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home} from "../Home/";
import './styles.css';
import {MoviesController} from "../../js/controllers/movies/MoviesController";

class App extends React.Component{
  constructor(props){
    super(props);
  }

  async componentWillMount(){
    await MoviesController.fetchTopRated();
    await MoviesController.fetchPopularMovies();
  }

  render(){
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
}

export default App;
