import React from "react"
// import avatarJessica from "../public/avatar-jessica.jpeg"
import UserDetails from "./UserDetails"
import ButtonSection from "./ButtonSection"
import "./Card.css";

function Card(props) {
  const user = props.user
  const socialLinks = user["social-links"]
  return (
    <div className="contenedorDinamico">
      <UserDetails user = {user} /> 
      <ButtonSection socialLinks ={socialLinks}/>
    </div>

  )
}

export default Card;