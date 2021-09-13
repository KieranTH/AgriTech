import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './Pages/Comps/Header/Header';
import Footer from './Pages/Comps/Footer/Footer';

import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Showcase from './Pages/Showcase/Showcase';
import Clusters from './Pages/Clusters/Clusters';
import News from './Pages/News/News';
import Join from './Pages/Join/Join';

import Loading from './Pages/Comps/Loading/Loading';

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
        <Header/>
        <div className="content-wrap">
          <Home/>
          <About/>
          <Showcase/>
          <Clusters/>
          <News/>
          <Join/>
        </div>
        <Footer/>
      </div>
      );
    }
}

export default App;
