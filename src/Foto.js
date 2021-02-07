import "./Foto.css";


//FIXME: each foto needs a unique 'key'
const Foto = (props) => {
  return  (
    <figure>
    <img src={props.picture} alt={props.alt}/>
    <figcaption>{props.alt}</figcaption>
    </figure>
  );
}

export default Foto;
