import NavigationBar from "../components/NavigationBar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { PersonajeContext } from "../contexts/PersonajesContext";
import { useContext, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const { personaje, getCharacter } = useContext(PersonajeContext);

  useEffect(()=>{
    getCharacter(id)
  })



  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>
        {personaje ? (
          <div>
            <h1>Nombre personaje: {personaje.name}</h1>
            <img src={personaje.image} alt="imagen del personaje" />
            <h3>Id del personaje: {personaje.id}</h3>
            <h2>Especie: {personaje.species}</h2>
          </div>
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
}
