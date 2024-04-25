import React from "react";
import "./CharacterDetails.css";
import TextoConEstilo from "./TextoConEstilo";
//const UserDetails = (props) => {
  
  // const [user, setUser] = useState({})
  const CharacterDetails = ({ personaje }) => {
  return (
    <>
    <img className="imagen" src={personaje.image} alt={`avatar de ${personaje.name}`} />
    <div className="descripcion">
      <h2 className= "nombres">{personaje.name}</h2>
      <p>
        <TextoConEstilo texto={personaje.status} />
      </p>
    </div>
  </>
  );
};

export default CharacterDetails;
