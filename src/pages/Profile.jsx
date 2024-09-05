import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavigationBar from "../components/NavigationBar";
import { useContext } from "react";
import { PersonajeContext } from "../contexts/PersonajesContext";

export default function Profile() {
  const { personaje } = useContext(PersonajeContext);
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={personaje.image} />
          <Card.Body>
            <Card.Title>{personaje.name}</Card.Title>
            <Card.Text>{personaje.species}</Card.Text>
            <Button variant="primary">Salir</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
