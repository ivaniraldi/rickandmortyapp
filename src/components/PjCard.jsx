/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function PjCard({character}) {
  const {name, species, origin, image, id } = character
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem' }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Especie: {species} 
          <br />
          ID: {id}
          <br />
          Origen: {origin.name}
        </Card.Text>
        <button onClick={()=>{navigate(`/detail/${id}`)}} className='btn btn-success'>Ir</button>
      </Card.Body>
    </Card>
  )
}
