import React from "react"
// import avatarJessica from "../public/avatar-jessica.jpeg"
//import UserDetails from "./UserDetails"
import ButtonSection from "./ButtonSection"
import EpsisodeDetails from "./EpisodeDetails"
import CharacterDetails from './CharacterDetails'
import "./CharactCard.css";

const CharactCard = ({ personaje, episodios }) =>{
  //const socialLinks = user["social-links"]
  return (
    <div className="personaje">
      <CharacterDetails personaje = {personaje} /> 
      <EpsisodeDetails episodios={episodios}/>
      <ButtonSection />
    </div>

  )
}

export default CharactCard;