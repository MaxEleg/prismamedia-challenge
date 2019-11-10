import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BestMoviesComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div className={"container"}>
      <h2>Les 10 meilleurs films</h2>
    </div>
  }
}


const mapStateToProps = function (state){
  return {
    bestMovies: state.bestMovies,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const BestMovies =  connect(mapStateToProps,mapDispatchToProps)(BestMoviesComponent);


export default BestMovies;
export {BestMovies};