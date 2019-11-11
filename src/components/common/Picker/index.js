import React from 'react';
import PropTypes from 'prop-types';
import {OptionPicker} from "./OptionPicker";

import './styles.css';
import DatePicker from "./DatePicker";

class Picker extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {type, options} = this.props;
    if(type === 'option'){
      return  <OptionPicker {...this.props} />;
    }else {
      return <DatePicker {...this.props} />;
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