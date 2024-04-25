import React from "react";
// import Card from "./components/Card"
import CharactCard from "./caracter/CharactCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
  //fetch(`https://rickandmortyapi.com/api/character/$(id)" `)
  // fetch("https://rickandmortyapi.com/api/character/" + NumAleatorios())
  const [personaje, setPersonaje] = useState([]);
  const [episodios, setEpisodio] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data);
        /* console.log(data); */
        fetchEpisodes(data.episode.slice(0, 5));
      });
  }, []);

  const fetchEpisodes = (episodesUrls) => {
    const promises = episodesUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodios) => {
        setEpisodio(episodios);
        /*         console.log(episodios);*/
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {personaje && (
        <CharactCard 
          key={personaje.id}
          personaje={personaje}
          episodios={episodios}
        />
      )}
    </>
  );
}

export default RickAndMortyApp;
