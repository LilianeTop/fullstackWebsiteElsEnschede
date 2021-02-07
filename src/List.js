import "./List.css";
import Foto from "./Foto";

const List = (props) => {
  return (
    <div>
        <h2> {props.title} </h2>
          <div className = "list">
            <Foto picture="/img/Natuur.jpg" alt="Slootje"/>
            <Foto picture="/img/mensen3Mannen.jpg" alt="Ladderzat"/>
            <Foto picture="/img/Poppenkoppen.jpg" alt="Dit is Ambra"/>
            <Foto picture="/img/Industrieel.jpg" alt="Scheepsdeel"/>
            <Foto picture="/img/Abstract.jpg" alt="Afgebladderd"/>
            <Foto picture="/img/Scenes.jpg" alt="Hanig Type"/>
          </div>
    </div>
);
}

export default List;
