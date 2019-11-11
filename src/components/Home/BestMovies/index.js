import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OwlCarousel from 'react-owl-carousel';
import objectPath from 'object-path';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css'

const BestMovie = (props)=><div className={"best-movie"}>
  <img className={"best-movie-img"} src={props.img} />
  <div className="best-movie-title">
    {props.title}
  </div>
  <div className="best-movie-date">
    {props.date}
  </div>
</div>;

class BestMoviesComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options: {
        loop: false,
        nav:false,
        items: 4,
        margin: 10,
        responsive:{
          0: {items: 1},
          600: {items: 2},
          800: {items: 3},
          1000: {items: 4},
        },
      }};
    this.carousel = React.createRef();
  }
  slide(direction){
    const elem = objectPath.get(this, 'carousel.current.$ele'); // on récupère l'element

    if(!elem){ // si il n'existe pas
      throw new Error('Component Carousel not initialized'); // on lance une erreur
    }
    elem.trigger(direction + '.owl.carousel', [500]); // on change la direction
  }
  render(){
    const {bestMovies} = this.props;

    let options = this.state.options;

    return <div className={"best-movies-container"}>
      <div className={"container"} style={{
        paddingBottom: '34px',
        borderBottom: '1px solid #2F3D57'
      }}>
        <h4>Les 10 meilleurs films</h4>
        <div className={"best-movies-carousel"}>
          <OwlCarousel ref={this.carousel} {...options}>
            {bestMovies.map((movie,i)=><BestMovie key={i}{...movie}/>)}
          </OwlCarousel>
          <div onClick={()=>this.slide('prev')} className={"chevron-carousel left"}/>
          <div onClick={()=>this.slide('next')}  className={"chevron-carousel right"}/>
        </div>
      </div>
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