import React from 'react';
import './Showcase.css';
import '../Comps/Styling/main.css';

class Showcase extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section id="showcase">
      <div className="showcase-container">
        <h1 className="showcase-title">Showcase Page</h1>
        <div className="showcase-info">
          Test
        </div>
      </div>
      </section>
    );
  }
}

export default Showcase;
