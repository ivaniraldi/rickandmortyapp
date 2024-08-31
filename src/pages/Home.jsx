import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PjCard from "../components/PjCard";


export default function Home() {
  const [personajes, setPersonajes] = useState([])

  const getCharacters = async() =>{
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    setPersonajes(data.results)
  }

  useEffect(()=>{getCharacters()}, [])

  return (
    <>
      <NavigationBar></NavigationBar>

    <div className="contenedorPj">

      {personajes.map((p, i) => {
        return (
          <PjCard key={i} character={p}/>
        )
      })}

    </div>

      <Footer></Footer>
    </>
  )
}
