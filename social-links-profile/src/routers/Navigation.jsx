import React from "react";
import RickAndMortyApp from "../RickAndMortyApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/caracter" element = {<RickAndMortyApp/>}/>
        <Route path="/*" element = {<p>Error 404 recurso no encontrado</p>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;