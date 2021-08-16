import React from 'react';
import './Header.css';
import '../Styling/main.css';
import mySparcSVG from '../../../Images/MySparc-SVG.svg';

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
            <Link to="/">
              <img className="img" src={mySparcSVG}/>
            </Link>
          </div>
          <div className="header-links">
            <ul className="header-list">
              <Link className="header-item" to="/about"><li><a className={`header-title ${this.props.location.pathname ==="/about" ? "active" : ""}`}>About</a></li></Link>
              <Link className="header-item" to="/what-we-do"><li><a className={`header-title ${this.props.location.pathname ==="/what-we-do" ? "active" : ""}`}>What we do</a></li></Link>
              <Link className="header-item" to="/clusters"><li><a className={`header-title ${this.props.location.pathname ==="/clusters" ? "active" : ""}`}>Clusters</a></li></Link>
              <Link className="header-item" to="/news"><li><a className={`header-title ${this.props.location.pathname ==="/news" ? "active" : ""}`}>News</a></li></Link>
              <Link className="header-item" to="/join"><li><a className={`header-title ${this.props.location.pathname ==="/join" ? "active" : ""}`}>Join</a></li></Link>
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

export default withRouter(Header);
