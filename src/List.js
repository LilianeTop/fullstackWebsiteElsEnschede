import "./List.css";
import Foto from "./Foto";

const List = (props) => {
  return (
    <div>
        <h2> {props.title} </h2>
          <div className = "list">
            <Foto picture="/img/Natuur.jpg" alt="groen water"/>
            <Foto picture="/img/mensen3Mannen.jpg" alt="3 dronken mannen op een bankje"/>
            <Foto picture="/img/Poppenkoppen.jpg" alt="poppenkop upclose"/>
            <Foto picture="/img/Industrieel.jpg" alt="schip aambeeld upclose"/>
            <Foto picture="/img/Abstract.jpg" alt="abstract rood"/>
            <Foto picture="/img/Scenes.jpg" alt="kip en clown op kei"/>
          </div>
    </div>
);
}

export default List;
