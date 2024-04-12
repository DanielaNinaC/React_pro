import React from "react"
// import avatarJessica from "../public/avatar-jessica.jpeg"
import UserDetails from "./UserDetails"
import ButtonSection from "./ButtonSection"
import "./Card.css";

function Card(props) {
  const user = props.user

  return (
    <div className="contenedorDinamico">
      {/* <UserDetails user = {user} /> */}
      <ButtonSection/>
    </div>

  )
}

export default Card;