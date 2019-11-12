import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './styles.css'
import MoviesPagination from "./MoviesPagination";
import {FilterController} from "../../../js/controllers/filters";
import {copy} from "../../../js/utils";

const MovieItem = (props)=><div
  className={"movie col-sm-6 col-lg-3"}
  style={{
    opacity: props.disabled ? 0.25 : 1
  }}>
  <img className={"movie-img"} src={props.img} />
  <div className="best-movie-title">
    {props.title}
  </div>
  <div className="best-movie-date">
    {props.date}
  </div>
</div>;

class MoviesListComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  filters(array){
    const {filters} = this.props;
    const {sortBy,year,gender} = filters;
    array = copy(array);
    FilterController.sortByFilter(sortBy, array);
    array = FilterController.filterByGender(gender, array);
    array = FilterController.filterByYear(year, array);

    return array;
  }

  render(){
    const {movies} = this.props;

    return <div className={"movies-list"}>
      <div className={"container"}>
        <div className={"row"}>
          {movies ? this.filters(movies).map((movie,i)=><MovieItem key={i}{...movie}/>) : null}
        </div>
      </div>
      <MoviesPagination {...this.props}/>
    </div>
  }
}


const mapStateToProps = function (state){
  return {
    filters: state.filters,
    movies: state.movies,
    lastFetchMode: state.lastFetchMode,
    lastQuery: state.lastQuery,
    totalPages: state.totalPages,
    page: state.page,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const MoviesList =  connect(mapStateToProps,mapDispatchToProps)(MoviesListComponent);


export default MoviesList;
export {MoviesList};