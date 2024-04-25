import React from "react"
import "./ButtonSection.css";
import { NavLink } from "react-router-dom";

const ButtonSection = ({socialLinks}) => {
    console.log(socialLinks)
    return (

        <div className = "contenedor3">
            <NavLink to ="/">
            <button className="botones">Home</button>
            </NavLink>
           
            
        </div>
    );
};

export default ButtonSection;