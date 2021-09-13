import React from 'react';
import './Header.css';
import '../Styling/main.css';
//import mySparcSVG from '../../../Images/MySparc-SVG.svg';

import { Link, withRouter } from "react-router-dom";

import Contact from'../../Contact/Contact';

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      seen: false
    }
  }


  togglePop = () =>{
    this.setState(
    {
      seen: !this.state.seen
    });
  };

  render(){
    console.log(this.props);
    return(
      <header className="header-container">
        <nav className="header-data">
          <div className="header-logo">
            <a href="/">
              <img className="img" src={"/Images/agritech-logo.jpg"}/>
              </a>
          </div>
          <div className="header-links">
            <ul className="header-list">
              <li><a className="header-item" href="#about">About</a></li>
              <li><a className="header-item" href="#showcase">Showcase</a></li>
              <li><a className="header-item" href="#the-clusters">Clusters</a></li>
              <li><a className="header-item" href="#news">News</a></li>
              <li><a className="header-item" href="#join">Join</a></li>
            </ul>
          </div>
          <div className="header-contact">
            <a className="header-title" onClick={this.togglePop}>Contact</a>
            {this.state.seen ? <Contact toggle={this.togglePop}/> : null}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
