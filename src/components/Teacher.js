import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';

import ListGroup from 'react-bootstrap/ListGroup'
import { FaPersonBooth } from 'react-icons/fa';

const Teacher=({ teacher })=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{teacher.first_name} { teacher.last_name}</Card.Title>
        
      </Card.Body>
     
      <Card.Body>
        <p>
            t
        </p>
       </Card.Body>
    </Card>
   
    /*<CardGroup>
        { teachers.map(teacher =>
      <Card  key={user.id}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>}
      
    </CardGroup>*/
  )
}



export default Teacher