import React from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import "./App.css";

class App extends React.Component{

  state = {artPiece: ""};

  // movieList = ["Star Wars", "Quentin Tarantino", "Tolkien"];
  // data = this.movieList.map(movie => {
  //   return <Lijst title={movie} />
  // });

  artPieceList = ["Natuur", "Water", "Structuur"];
  data = this.artPieceList.map(artPiece => {
    return <List title = {artPiece} />
  });

  search = (searchWord) => {
    let filteredArtPieces = this.artPieceList.filter(title => {
      return title.search(searchWord) !== -1;
    }).map(artPiece => {
      return <List title = {artPiece} />

    });
    this.setState({artPieces: filteredArtPieces});
  }

  componentDidMount(){
    this.setState({artPieces: this.data});
  }

  render(){
    return (
      <div class = "app">
      <SearchBar code = {this.search} />
      {this.state.artPieces}
      </div>
    );
  }
}
export default App;
