import React from 'react';
import './Home.css';
import '../../Comps/Styling/main.css';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="home-container">
        <h1 className="home-title">Home Page</h1>
        <div className="home-info">
          Test
        </div>
      </div>
    );
  }
}

export default Home;
