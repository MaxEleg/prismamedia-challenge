import React from 'react';

import './styles.css';

import logo from '../../assets/images/logo.svg';
import {MoviesController} from "../../js/controllers/movies/MoviesController";

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {search: '', focus: false}
  }

  fetchMovies(){
    try{
      if(!this.state.search){
        let res = MoviesController.fetchPopularMovies();
        res.then(()=>0);
        res.catch(err=>{
          alert('Une erreur est survenue');
          console.error(err);
        });
        return;
      }

      let res = MoviesController.fetchSearchMovies(this.state.search);
      res.then(()=>0);
      res.catch(err=>{
        alert('Une erreur est survenue');
        console.error(err);
      });
    } catch(ex){
      alert('Une erreur est survenue');
      console.error(ex);
    }

  }
  render(){
    return <div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-12 col-lg-6"}>
            <img src={logo} style={{width: '221px', marginBottom: '18px'}}/>
          </div>
          <div className={"col-12 col-lg-6 "}>
            <input
              type={"text"}
              onChange={(e)=>this.setState({search: e.target.value})}
              onBlur={()=>{this.setState({focus: false}); this.fetchMovies()}}
              onFocus={()=>{this.setState({focus: true})}}
              value={this.state.search}
              className={"search-input"}
              placeholder={"Rechercher un film"}
            />
            {this.state.focus ?
              <button style={{ margin: '5px'}} className={"btn btn-success"}>
                Rechercher
              </button> :
              null}
          </div>
        </div>
      </div>
    </div>;
  }
}

export {Navbar}