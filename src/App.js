import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import ArtPiece from "./ArtPiece";
import SearchBar from "./SearchBar";
import List from "./List";
import Footer from "./Footer";



class App extends React.Component{


  render(){
    return (
      <div class = "app">
        <NavBar />
        <ArtPiece />
        <List />
        <Footer />
      </div>
    );
  }
}
export default App;
