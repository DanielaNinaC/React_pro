import React from "react";
import "./UserDetails.css";
import { useEffect,useState } from "react";
const UserDetails = ({user}) => {
  
  // const [user, setUser] = useState({})
  
  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagen"
          src={user.avatar}
          alt= ""
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <h2 className="nacionalidad">{user.location}</h2>
      <p className="descripcion">{user.description}</p>
    </div>
  );
};

export default UserDetails;
