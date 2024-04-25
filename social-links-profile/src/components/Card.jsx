import React from "react"
// import avatarJessica from "../public/avatar-jessica.jpeg"
import UserDetails from "./UserDetails"
import ButtonSection from "./ButtonSection"
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  const character = props.character;
  //const socialLinks = user["social-links"]
  return (
    <NavLink to={ `/caracter?id=${character.id}`}>
      <div className="contenedorDinamico">
      <UserDetails character = {character} /> 
      {/* <ButtonSection /> */}
    </div>
    </NavLink>
    

  )
}

export default Card;