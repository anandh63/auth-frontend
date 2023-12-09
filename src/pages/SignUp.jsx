import React, { useState } from 'react'
import { Container, Form, Button, FormGroup, FormLabel} from "react-bootstrap"
import "../styles/SignUp.css"
import { Link, useNavigate} from "react-router-dom"
import axios from "axios"
import API_URL from "../../config/global"

const SignUp = () => {
  const [ formData, setFormData] = useState({
    name:"",
    email:"",
    password:""

  })
  const handleChange =(e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
try {
const response = await axios.post(
  `${API_URL}/signin/verify`, formData
  )
  console.log (response)
  if (response.data === true) {
    alert("Registration link sent to your email id")
  } else if (response.data === false) {
    alert("User already exist")
  }

}catch (e) {
  console.error("Error during registration",e)
}

    
  }
  return (
    <Container> 
      <h1> Ragistration Form</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          />
        </Form.Group>

      <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          />
        </Form.Group>
        <Button variant='primary' type='submit' > Register</Button>
        <p>Already have an account?</p> <Link to="/login">Login</Link> 

      </Form>
      

    </Container>
  )
}

export default SignUp