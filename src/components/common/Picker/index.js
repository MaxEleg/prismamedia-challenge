import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class OptionPicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expand : false,
    };
  }

  expand(expand){
    this.setState({expand: expand})
  }

  render(){
    const {size, leftArrow, options} = this.props;
    const {expand} = this.state;
    let btnClass = "btn-picker " + size;
    const selectedOption = options.filter(item=>item.selected)[0];
    return <button
      className={btnClass}
      onFocus={()=>this.expand(true)}
      onBlur={()=>this.expand(false)}
    >
      {selectedOption.title}
      {leftArrow ? <img
        className="left-arrow"
        src={"/images/icons/dropdownarrow.svg"}
      /> : null}

      {expand ? <h1>EXPANDED</h1> : null}

    </button>
  }
}

class Picker extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {type, options} = this.props;
    if(type === 'option'){
      return  <OptionPicker {...this.props} />;
    }else {
      return null;
    }
  }
}

Picker.propTypes = {
  type: PropTypes.string,
  onSelected: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  leftArrow: PropTypes.bool.isRequired,
  options: PropTypes.array
};

export default Picker;
export {Picker};