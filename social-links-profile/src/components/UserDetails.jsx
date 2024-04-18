import React from "react";
import "./UserDetails.css";
import { useEffect,useState } from "react";
const UserDetails = (props) => {
  
  // const [user, setUser] = useState({})
 const character = props.character;
  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagen"
          src={character.image}
          alt= ""
        ></img>
      </div>
      <h1 className="nombre">{character.name}</h1>
      <h2 className="nacionalidad">{character.location.name}</h2>
      <p className="descripcion">{character.species}, {character.gender}</p>
    </div>
  );
};

export default UserDetails;
