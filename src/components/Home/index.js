import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header} from "../Header";

class HomeComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div>
      <Header/>
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