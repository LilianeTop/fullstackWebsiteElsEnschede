import "./List.css";
import Foto from "./Foto";

const List = (props) => {
  return (
    <div>
        <h2> {props.title} </h2>
          <div className = "list">
            <Foto picture="/img/Natuur.jpg"/>
            <Foto picture="/img/Mensen.jpg"/>
            <Foto picture="/img/Poppenkoppen.jpg"/>
            <Foto picture="/img/Industrieel.jpg"/>
            <Foto picture="/img/Abstract.jpg"/>
            <Foto picture="/img/Scenes.jpg"/>
          </div>
    </div>
);
}

export default List;
