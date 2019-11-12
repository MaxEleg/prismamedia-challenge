import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import objectPath from 'object-path';

import './styles.css'

const MovieItem = (props)=><div className={"movie col-sm-6 col-lg-3"}>
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

  render(){
    const {movies} = this.props;

    return <div className={"movies-list"}>
      <div className={"container"}>
        <div className={"row"}>
            {movies.map((movie,i)=><MovieItem key={i}{...movie}/>)}
        </div>
      </div>
    </div>
  }
}


const mapStateToProps = function (state){
  return {
    movies: state.movies,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const MoviesList =  connect(mapStateToProps,mapDispatchToProps)(MoviesListComponent);


export default MoviesList;
export {MoviesList};