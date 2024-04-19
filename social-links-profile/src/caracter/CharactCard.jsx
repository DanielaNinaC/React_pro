import React from "react"
// import avatarJessica from "../public/avatar-jessica.jpeg"
//import UserDetails from "./UserDetails"
import ButtonSection from "./ButtonSection"
import EpsisodeDetails from "./EpisodeDetails"
import CharacterDetails from './CharacterDetails'
import "./CharactCard.css";

function Card(props) {
  const character = props.character;
  //const socialLinks = user["social-links"]
  return (
    <div className="contenedorDinamico">
      <CharacterDetails character = {character} /> 
      <EpsisodeDetails/>
      <ButtonSection />
     
    </div>

  )
}

export default Card;