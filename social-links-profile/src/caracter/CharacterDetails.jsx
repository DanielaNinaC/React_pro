import React from "react";
import "./CharacterDetails.css";
import { useEffect,useState } from "react";
const UserDetails = (props) => {
  
  // const [user, setUser] = useState({})
 const character = props.character;
  return (
    <div className="contenedor">
      <div className="primercomp">
        <img
          className="imagen"
          src={character.image}
          alt= ""
        ></img>
      </div>
      <h1 className="nombre">{character.name}</h1>
      <h2 className="descripcion">{character.type}</h2>
      {/* <p className="descripcion">{character.species}, {character.gender}</p> */}
    </div>
  );
};

export default UserDetails;
