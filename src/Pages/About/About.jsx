import React from 'react';
import './About.css';
import '../Comps/Styling/main.css';

class About extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="about-container">
        <h1 className="about-title">About Page</h1>
        <div className="about-semi-container">
          <div className="about-data">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris. Lacus sed viverra tellus in. Mattis aliquam faucibus purus in massa tempor nec feugiat. Habitant morbi tristique senectus et. Ultrices dui sapien eget mi proin sed libero enim. Magna fermentum iaculis eu non diam phasellus. Lectus nulla at volutpat diam ut venenatis tellus in. Mattis enim ut tellus elementum sagittis vitae et leo duis. Molestie a iaculis at erat pellentesque adipiscing. At risus viverra adipiscing at in tellus. Sit amet porttitor eget dolor. Aenean pharetra magna ac placerat vestibulum. Dui id ornare arcu odio ut sem nulla. Interdum varius sit amet mattis. A erat nam at lectus urna duis convallis. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Elementum nibh tellus molestie nunc non blandit massa enim nec. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Diam ut venenatis tellus in metus.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
