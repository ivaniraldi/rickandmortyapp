/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const PersonajeContext = createContext();

const PersonajesProvider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [personaje, setPersonaje] = useState({})

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setPersonajes(data.results);
  };

  const getCharacter = async (id) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id);
    const data = await response.json();
    setPersonaje(data)
  };

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <PersonajeContext.Provider value={{ personajes, setPersonajes, personaje, getCharacter }}>
      {children}
    </PersonajeContext.Provider>
  );
};

export default PersonajesProvider;
