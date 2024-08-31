import { Link } from "react-router-dom"
export default function Landing() {
  return (
    <div className="landingPage">
      <h1>Bienvenidos a Rick and Morty</h1>
      <Link to="/home"><button className="btn btn-primary">Entrar</button></Link>
      
    </div>
  )
}
