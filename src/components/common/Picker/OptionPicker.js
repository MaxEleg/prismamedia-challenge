import React from "react";
import $ from 'jquery';

class OptionPicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expand : false,
    };
    this.buttonExpand =  React.createRef();
  }

  expand(expand){
    this.setState({expand: expand})
  }

  render(){
    const {size, leftArrow, options} = this.props;
    const {expand} = this.state;
    let btnClass = "btn-picker ";
    const selectedOption = options.filter(item=>item.selected)[0];
    return <button
      className={btnClass}
      onFocus={()=>this.expand(true)}
      onBlur={()=>this.expand(false)}
      ref={this.buttonExpand}>
      <div className={size} >
        {selectedOption.title}
      </div>
      {leftArrow ? <img
        className="left-arrow"
        src={"/images/icons/dropdownarrow.svg"}
      /> : null}

      {expand ? <div className={"options-container"}>
        {options.map((item,i)=>item !== selectedOption ? <div
          key={i}
          className={"option-selectable"}
          onClick={()=>{
            this.props.onSelected(item,i); // on lance onSelected
            $(this.buttonExpand.current).blur(); // on enleve le focus pour cacher les options
          }}>
          {item.title}
        </div> : null)}
      </div> : null}

    </button>
  }
}

export {OptionPicker};
export default OptionPicker;