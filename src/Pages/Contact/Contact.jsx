import React from 'react';
import './Contact.css';

class Contact extends React.Component{

  handleClick = () => {
    this.props.toggle();
  }

  render(){
    return(
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>E-mail</p>
          <form>
            <label for="email">E-mail: &nbsp;</label>
            <input type="text" placeholder="Your E-Mail Address"/>
            <br></br>
            <br></br>
            <label for="subject">Subject: &nbsp;</label>
            <input type="text" placeholder="E-mail Subject"/>
            <br></br>
            <br></br>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div className="modal-container">
        </div>
    </div>
    );
  }
}

export default Contact;
