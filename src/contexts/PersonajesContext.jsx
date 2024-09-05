/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const PersonajeContext = createContext();

const PersonajesProvider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [personaje, setPersonaje] = useState({})
  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setPersonaje(data.results[0])
    setPersonajes(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <PersonajeContext.Provider value={{ personajes, setPersonajes, personaje }}>
      {children}
    </PersonajeContext.Provider>
  );
};

export default PersonajesProvider;
