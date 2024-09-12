import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { useContext } from 'react';


export default function NavigationBar() {
  const { user, setUser } = useContext(GlobalContext)
  const setActiveClass = ({ isActive }) => (isActive ? "linkActivo" : "linkInactivo");
  const token = user.token

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
            <NavLink className={"navbar-brand"}  to="/">RickAndMortyApp</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <NavLink className={ setActiveClass } to="/home">Inicio</NavLink>
            <NavLink className={ setActiveClass } to="/create">Crear Personaje</NavLink>

            {token? <NavLink className={ setActiveClass } to="/profile">Perfil</NavLink>: null}
            <NavLink className={ setActiveClass } to="/login">Login</NavLink>
            {token? <NavLink className={ setActiveClass } onClick={() =>{setUser({ username : "", password: "" ,  token: false})}} to="/">Cerrar sesion</NavLink>: null}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
