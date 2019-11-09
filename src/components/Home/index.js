import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomeComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div>
      HOME
      {JSON.stringify(this.props)}
    </div>
  }
}


const mapStateToProps = function (state){
  return {
    movies: state.movies,
    filteredMovies: state.filteredMovies
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectedArticle: function(article){
      return {
        type: '',
        payload: article
      }
    }
  }, dispatch)
});

const Home =  connect(mapStateToProps,mapDispatchToProps)(HomeComponent);


export default Home;
export {Home};