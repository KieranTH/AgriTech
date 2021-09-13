import React from 'react';

import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
          <p className="footer__title">Agritech</p>
          <p>&#169; 2021 copyright all right reserved</p>
      </footer>
    );
  }
}

export default Footer;
