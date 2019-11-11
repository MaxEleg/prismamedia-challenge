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
      }],
      sortBy: [{
        title: 'Ordre alphabétique',
        value: 'alphabetic',
        selected: true
      }, {
        title: 'Note',
        value: 'notation',
        selected: false
      }]
    }
  }
  selectOption(options, selectionIndex){ // cette fonction va selectionner une option et changer le state
    options.map(option=>{ //on déseectionne tout
      option.selected = false;
      return option;
    });
    options[selectionIndex].selected = true; // on set selected a true pour notre selection

    this.setState(options);
  }
  optionSelected(optionsKeys, option, i){
    let options = [...this.state[optionsKeys]]; // on copy le tableau
    this.selectOption(options, i); // on selectionne la nouvelle option
  }

  setDate(date){
    console.log(date);
  }

  render(){
    return <div className={"movies-filter-container"}>
      <div className={"container"}>
        <h4>Tous les films</h4>
        <div className={"row"}>
          <div className={"col-12 col-lg-6 filter"}>
            <span>Trier par :</span>

            <Picker
              type={"option"}
              size={'lg'}
              leftArrow={true}
              options={this.state.sortBy}
              onSelected={(item,i)=>this.optionSelected('sortBy', item,i)}
            />
          </div>
          <div className={"col-12 col-sm-6 col-lg-3 filter"}>
            <span>Filtrer par :</span>
            <Picker
              type={"option"}
              size={'sm'}
              leftArrow={true}
              options={this.state.genders}
              onSelected={(item,i)=>this.optionSelected('genders', item,i)}
            />
          </div>
          <div className={"col-12 col-sm-6 col-lg-3 filter"}>
            <Picker
              type={"date"}
              size={'sm'}
              leftArrow={false}
              options={this.state.genders}
              onSelected={(item,i)=>this.setDate(item,i)}
            />
          </div>

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