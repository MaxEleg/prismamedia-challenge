import React from "react";
import $ from 'jquery';
import {chunkArray} from "../../../js/utils";

class DatePicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expand : false,
      title: 'Année',
      startYear: new Date().getFullYear() - 11
    };
    this.buttonExpand =  React.createRef();
  }

  expand(expand){
    this.setState({expand: expand})
  }

  changeStartYear(direction){ // va incrémenter ou décrementer startYear
    let newYear = this.state.startYear;
    if(direction === 'prev'){
      newYear = newYear - 11;
    }else {
      newYear = newYear + 11;
    }
    if(newYear > 0)
      this.setState({startYear: newYear});
  }

  getDiffNumberArray(start, end){ // cette fonction retourne tous les nombres entre une intervalle
    const diff = [];
    for(let i = start; i <= end; i++){
      diff.push(i);
    }
    return chunkArray(diff, 4);
  }
  render(){
    const {leftArrow} = this.props;
    const {expand} = this.state;
    const diff = this.getDiffNumberArray(this.state.startYear, this.state.startYear + 11);
    let btnClass = "btn-picker ";
    return <button
      className={btnClass}
      onFocus={()=>this.expand(true)}
      onBlur={()=>this.expand(false)}
      ref={this.buttonExpand}>
      <div style={{
        padding: '8px 27px',
        textAlign: 'center'
      }} >
        {this.state.title}
      </div>
      {leftArrow ? <img
        className="left-arrow"
        src={"/images/icons/dropdownarrow.svg"}
      /> : null}

      {expand ? <div className={"date-container"}>
        <div className={"bubble-date"} />
        <div className={"top-date"}>
          <img onClick={()=>this.changeStartYear('prev')} className={"arrow-year prev"} src={"/images/icons/yearprevarrow.svg"}/>
          <img onClick={()=>this.changeStartYear('next')} className={"arrow-year next"} src={"/images/icons/yearnextarrow.svg"}/>
          {this.state.startYear} - {this.state.startYear + 11}
        </div>
        <div className={"body-date"}>
          {diff.map((line, i)=><div className={"date-line d-flex justify-content-between"} key={i}>
            {line.map((n,j)=><span onClick={()=>{
              this.props.onSelected(n);// on lance onSelected
              $(this.buttonExpand.current).blur(); // on enleve le focus pour cacher les années
              this.setState({
                title: n
              });

            }} className={"year-selection"} key={j}>
              {n} &nbsp;
            </span>)}
          </div>)}
        </div>
      </div> : null}

    </button>
  }
}

export {DatePicker};
export default DatePicker;