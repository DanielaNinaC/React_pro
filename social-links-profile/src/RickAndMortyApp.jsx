import React from "react"
// import Card from "./components/Card"
import CharactCard from "./caracter/CharactCard"
import { useEffect,useState } from "react";

function NumAleatorios() {
  const num = [];
  for (let i = 0; i < 2; i++) {
    num.push(Math.floor(Math.random() * 857)); 
  }
  num.toString();
  return num;
}
function App() {
  const [characters, setcharacters] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + NumAleatorios())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcharacters(data)
        console.log(data)
      });
  
  }, [])
  return (
    <>
      {" "}
      {/* es un fracment */}
      <div>
      {characters.map((character) => (
        <CharactCard key={character.id} character={character} />
      ))}
      </div>

    </>
  );
}

export default App;
