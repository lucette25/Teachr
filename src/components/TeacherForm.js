import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';


const TeacherForm = ({ addEmployee}) =>{
  const [lastName,setLastName]=useState('')
  const [firstName,setFirstName] = useState('')
  const [email,setEmail] = useState('')

  const newEmployee =  (event) => {
    event.preventDefault()
    addEmployee({
      'first_name':firstName,
      'last_name':lastName,
      'email':email
    })
    setLastName('')
    setFirstName('')
    setEmail('')


  }

  return (
  <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={({ target }) =>  setLastName(target.value)}>
          <Form.Label>Nom </Form.Label>
          <Form.Control type="text" placeholder="Entrez le nom du produit" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={({ target }) =>  setFirstName(target.value)}>
          <Form.Label> Prénom </Form.Label>
          <Form.Control type="text" placeholder="Entrez le prix du produit" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={({ target }) =>  setEmail(target.value)}>
          <Form.Label> Email </Form.Label>
          <Form.Control type="text" placeholder="Entrez la quantité du produit" />
      </Form.Group>

      <Button variant="success" type="submit" onClick={newEmployee}>
        Ajouter
      </Button>
    </Form>
  </div>
  )
}



export default TeacherForm