import "./Foto.css";

const Foto = (props) => {
  return  (
    <figure>
    <img src={props.picture}/>
    <figcaption>Onderwerp</figcaption>
    </figure>
  );
}

export default Foto;
