import React from 'react';
import './Home.css';
import '../../Comps/Styling/main.css';

import ScrollReveal from 'scrollreveal';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1500,
        reset: true
    });

    /*SCROLL HOME*/
    sr.reveal('.home-title',{delay: 100});
    sr.reveal('.home-info',{delay: 200});
    sr.reveal('.slideshow-container', {delay: 200});
    //sr.reveal('.home__img',{delay: 400});
    //sr.reveal('.home__social-icon',{ interval: 200});

  }

  render(){
    return(
    <section id="home-page">
      <div className="home-container">
        <h1 className="home-title">Home Page</h1>
        <div className="home-info">
          Test
        </div>
        <div className="slideshow-container">
          <div className="slideshow-content">

          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Home;
