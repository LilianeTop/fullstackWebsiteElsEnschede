import "./ArtPiece.css";

const ArtPiece = (props) => {
  return (
    <figure>
    <img src={props.picture} alt="running water"/>
    </figure>
  );
}

export default ArtPiece;
