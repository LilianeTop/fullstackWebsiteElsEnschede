import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import ArtPiece from "./ArtPiece";
import SearchBar from "./SearchBar";
import List from "./List";



class App extends React.Component{


  render(){
    return (
      <div class = "app">
        <NavBar />
        <ArtPiece />
        <List />
      </div>
    );
  }
}
export default App;
