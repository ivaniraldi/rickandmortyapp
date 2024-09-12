import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavigationBar from "../components/NavigationBar";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Profile() {
  const { user, setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate("/")
    setUser({ username : "", password: "",  token: false})
  }
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        {user? 
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.password}</Card.Text>
            <Button onClick={()=>{cerrarSesion()}} variant="primary">Cerrar sesión</Button>
          </Card.Body>
        </Card> : <><h2>Loading...</h2></>}
      </div>
    </div>
  );
}
