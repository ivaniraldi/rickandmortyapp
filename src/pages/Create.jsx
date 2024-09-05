import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CreationForm from "../components/CreationForm";
import { useContext } from "react";
import { PersonajeContext } from "../contexts/PersonajesContext";

export default function Create() {
  const { personajes } = useContext(PersonajeContext)
  return (
    <div className="footer-fix">

    <NavigationBar></NavigationBar>

    <div className="d-flex justify-content-center my-4">
    <CreationForm></CreationForm>
    </div>
    <div className="d-flex">
      {personajes.map((p,i) =>{
        return(
          <div className="badge bg-dark" key={i}>{p.name}</div>
        )
      })}
    </div>

    <Footer></Footer>
    
    </div>
  )
}
