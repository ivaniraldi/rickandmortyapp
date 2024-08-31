import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2'

export default function CreationForm() {
  const [nombre, setNombre] = useState("")
  const [especie, setEspecie] = useState("")
  const [origen, setOrigen] = useState("")
  const [imagen, setImagen] = useState("")
  const [error, setError] = useState("")

  const validarForm = (e) =>{
    e.preventDefault();
    if(!nombre || nombre.length < 5){
      setError("Ingrese un nombre, de por lo menos 5 caracteres")
      return
    }
    if(!especie || especie.length < 6){
      setError("Ingrese una especie, de por lo menos 6 caracteres")
      return
    }
    if(!origen || origen.length < 4){
      setError("Ingrese un origen, de por lo menos 4 caracteres")
      return
    }
    if(!imagen){
      setError("Ingrese la url de una imagen")
      return
    }
    setError("")
    Swal.fire({
      title: "Personaje Creado!",
      text: "Ve a el inicio para verlo!",
      icon: "success"
    });
  } 

  return (
    <div>
      <Form onSubmit={(e)=>validarForm(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="Ingrese un nombre" />
        {error == "Ingrese un nombre, de por lo menos 5 caracteres" ? <p className="text-danger">{error}</p> : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Origen</Form.Label>
          <Form.Control value={origen} onChange={(e)=> setOrigen(e.target.value)} type="text" placeholder="Ingrese un origen" />
        {error == "Ingrese un origen, de por lo menos 4 caracteres" ? <p className="text-danger">{error}</p> : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Especie</Form.Label>
          <Form.Control value={especie} onChange={(e)=> setEspecie(e.target.value)} type="text" placeholder="Ingrese una especie" />
        {error == "Ingrese una especie, de por lo menos 6 caracteres" ? <p className="text-danger">{error}</p> : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Url de la imagen</Form.Label>
          <Form.Control value={imagen} onChange={(e)=> setImagen(e.target.value)} type="text" placeholder="Pega el url de una imagen" />
        {error == "Ingrese la url de una imagen" ? <p className="text-danger">{error}</p> : null}
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </div>
  );
}
