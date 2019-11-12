import React from 'react';
import './styles.css';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div className="app-header">
      <img src={"/images/fonds/header-bg.png"} className={"header-bg"} />
      {this.props.children}
    </div>
  }
}

export {Header}