/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

export default function PjCard({character}) {
  const {name, species, origin, image } = character

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem' }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Especie: {species} 
          <br />
          Origen: {origin.name}
        </Card.Text>
        <button className='btn btn-success'>Ir</button>
      </Card.Body>
    </Card>
  )
}
