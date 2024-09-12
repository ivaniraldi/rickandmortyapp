import { Link } from "react-router-dom"
import image from "../assets/imagen.jpg"

export default function Landing() {

  return (
    <div className="landingPage">
      <img style={{width:"30rem", borderRadius:"20px"}} src={image} alt="Hero img" />
      <h1>Bienvenidos a Rick and Morty</h1>
      <Link to="/home"><button className="btn btn-primary">Entrar</button></Link>
      
    </div>
  )
}
