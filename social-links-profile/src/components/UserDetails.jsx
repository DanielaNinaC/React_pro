import React from "react";
import "./UserDetails.css";
import { useEffect,useState } from "react";
const UserDetails = (props) => {
  
  const [user, setUser] = useState({})
  setUser(props.user);
  useEffect(() => {
  fetch("https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setUser(data[3])
      console.log(data)
    });

}, [])

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
