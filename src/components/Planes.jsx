import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../components/Planes.css';

const Planes = () => {
  return (
    <>
    <div>
    <h3 className='TituloPlanes'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
        className="bi bi-record-fill PuntoColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
      </svg>Seguro para ellos</h3>
    <CardGroup className='CardGroup'> 
      <Card> 
        <Card.Img className='CardsPlanes' variant="top" src="../src/assets/gatos-bebes.webp" />
        <Card.Body>
          <Card.Title>Primeros pasos</Card.Title>
          <Card.Text>
          Servicios para mascotas de 0 a 5 años.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='CardPlan'>
        <Card.Img className="CardsPlanes" variant="top" src="../src/assets/adulto.webp"/>
        <Card.Body>
          <Card.Title>Madurando</Card.Title>
          <Card.Text>
          Servicios para mascotas de 5 a 10 años 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Ultima actualizacion</small>
        </Card.Footer>
      </Card>
      <Card className='CardPlan'>
        <Card.Img className='CardsPlanes' variant="top" src="../src/assets/anciano.webp" />
        <Card.Body>
          <Card.Title>Adultos</Card.Title>
          <Card.Text>
          servicios para mascotas de más de 10 años.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </>
  );
}

export default Planes;