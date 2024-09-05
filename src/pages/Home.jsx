import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import PjCard from "../components/PjCard";
import { useContext } from "react";
import { PersonajeContext } from "../contexts/PersonajesContext";

export default function Home() {
  const { personajes } = useContext(PersonajeContext);


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
