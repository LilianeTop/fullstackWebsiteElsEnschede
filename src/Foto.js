import "./Foto.css";

const Foto = (props) => {
  return  (
    <figure>
    <img src={props.picture} alt={props.alt}/>
    <figcaption>Onderwerp</figcaption>
    </figure>
  );
}

export default Foto;
