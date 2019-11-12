import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import objectPath from "object-path";
import PropTypes from 'prop-types';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css';
import {getDiffNumber} from "../../../js/utils";
import {MoviesController} from "../../../js/controllers/movies/MoviesController";
import {store} from "../../../js/store";

class MoviesPagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options: {
        loop: false,
        nav:false,
        items: 8,
        margin: 10,
        responsive:{
          600: {items: 4},
          800: {items: 8},
        },
      }};
    this.carousel = React.createRef();
  }
  slide(direction){
    const elem = objectPath.get(this, 'carousel.current.$ele'); // on récupère l'element

    if(!elem){ // si il n'existe pas
      console.error('Component Carousel not initialized'); // on lance une erreur
      return;
    }
    elem.trigger(direction + '.owl.carousel', [500]); // on change la direction
  }

  changePage(page){
    if(this.props.lastFetchMode === 'popular') {
      let req = MoviesController.fetchPopularMovies(page);
      req.then(() => 0);
      req.catch(err => {
        alert('Une erreur est survenue.');
        console.error(err);
      });
      return;
    }
    if(this.props.lastFetchMode === 'search') {
      const {lastQuery} = store.getState();
      let req = MoviesController.fetchSearchMovies(lastQuery, page);
      req.then(() => 0);
      req.catch(err => {
        alert('Une erreur est survenue.');
        console.error(err);
      });
      return;
    }
  }

  render(){
    const {page,totalPages,lastFetchMode,lastQuery} = this.props;
    const pages = getDiffNumber(1, totalPages);
    let options = this.state.options;

    return <div className={"movies-pagination"}>
      <div className={"container"}>
        {pages.length ? <OwlCarousel ref={this.carousel} {...options}>
          {pages.map((movie,i)=><button
            className={"pagination-btn btn-" + (i + 1)}
            key={i}
            onClick={()=>{
             this.changePage(i +1);
            }}
          >{i + 1}
          </button>)}
        </OwlCarousel> : null}
      </div>
      <div onClick={()=>this.slide('prev')} className={"pagination-btn chevron-pagination left"}/>
      <div onClick={()=>this.slide('next')}  className={"pagination-btn chevron-pagination right"}/>

    </div>
  }
}

MoviesPagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  lastFetchMode: PropTypes.string,
  lastQuery: PropTypes.string,
};

export default MoviesPagination;