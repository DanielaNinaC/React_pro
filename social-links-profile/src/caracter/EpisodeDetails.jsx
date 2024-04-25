import React from "react"
import "./EpisodeDetails.css";

const EpisodeDetails = ({ episodios }) => {
    return (
      
        <div className="episodio">
          {episodios.map((episodio) => (
            <div key={episodio.id} className="episodioText">
              <h3>{episodio.name} </h3>
              <p>Fecha: {episodio.air_date} </p>
            </div>
          ))}
        </div>
     
    );
  };
  
  export default EpisodeDetails;