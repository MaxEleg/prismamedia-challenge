import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import objectPath from 'object-path';

import './styles.css';
import Picker from "../../common/Picker";


class MoviesFilterComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      genders: [{
        title: 'Genre',
        value: 'all',
        selected: true
      }, {
        title: 'Tous',
        value: 'all',
        selected: false
      }, {
        title: 'Action',
        value: 'action',
        selected: false
      }, {
        title: 'Horreur',
        value: 'horror',
        selected: false
      }, {
        title: 'Amour',
        value: 'love',
        selected: false
      }]
    }
  }

  optionSelected(option, i){

  }

  render(){
    return <div className={"movies-filter-container"}>
      <div className={"container"}>
        <h4>Tous les films</h4>
        <div>
          Trier par :
          <Picker
            type={"option"}
            size={'sm'}
            leftArrow={true}
            options={this.state.genders}
            onSelected={(item,i)=>this.optionSelected(item,i)}
          />
        </div>
      </div>
    </div>
  }
}


const mapStateToProps = function (state){
  return {
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const MoviesFilter =  connect(mapStateToProps,mapDispatchToProps)(MoviesFilterComponent);


export default MoviesFilter;
export {MoviesFilter};