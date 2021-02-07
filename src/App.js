import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Home from "./components/pages/Home";
import Portfolio from './components/pages/Portfolio';
import AboutEls from "./components/pages/AboutEls";
import Standpunt from "./Standpunt";
import HomeCarousel from "./HomeCarousel";





class App extends React.Component{
  render(){
    return (
      <Router>
        <div className = "app">
          <Route path='*' component={NavBar} />
          <Route path='*' component={Footer} />
          <Route exact path='/standpunt' component={Standpunt} />
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutEls' component={AboutEls} />
          <Route exact path='/natuur' component={HomeCarousel} />


        </div>
      </Router>
    );
  }
}
export default App;
