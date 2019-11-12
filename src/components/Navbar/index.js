import React from 'react';

import './styles.css';

import logo from '../../assets/images/logo.svg';
const Navbar = ()=> <div>
  <div className={"container"}>
    <div className={"row"}>
      <div className={"col-12 col-lg-6"}>
        <img src={logo} style={{width: '221px', marginBottom: '18px'}}/>
      </div>
      <div className={"col-12 col-lg-6 "}>
        <input
          type={"text"}
          className={"search-input"}
          placeholder={"Rechercher un film"}
        />
      </div>
    </div>
  </div>
</div>;

export {Navbar}