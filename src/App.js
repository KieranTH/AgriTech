import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './Pages/Comps/Header/Header';
import Footer from './Pages/Comps/Footer/Footer';

import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import WhatWeDo from './Pages/WhatWeDo/WhatWeDo';
import Clusters from './Pages/Clusters/Clusters';
import News from './Pages/News/News';
import Join from './Pages/Join/Join';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './Pages/Comps/Styling/main.css';


class App extends React.Component{

  constructor(props)
  {
    super(props);
  }


  render(){
    return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={()=> <Home/>}/>
          <Route path="/about" exact component={()=><About/>}/>
          <Route path="/what-we-do" exact component={()=><WhatWeDo/>}/>
          <Route path="/clusters" exact component={()=><Clusters/>}/>
          <Route path="/news" exact component={()=><News/>}/>
          <Route path="/join" exact component={()=><Join/>}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
    );
  }
}

export default App;
