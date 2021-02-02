import ArtPiece from "./ArtPiece";
import "./List.css";

const List = (props) => {
  return (
    <div>
    <h2> {props.title} </h2>
    <div className = "List">
    <ArtPiece picture = "/img/homeRunningWater.jpg"/>
</div>
</div>
);
}

export default List;
