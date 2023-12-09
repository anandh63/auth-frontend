import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import '../styles/Home.css'
import axios from "axios"
import API_URL from "../../config/global"


const Home = () => {

  const [res, setRes]=useState({})

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"))
    if (user && user.token) {
      getData(user.token)
    }
  },[])

  const getData = async (token) => {

  try { 
    
  const config = {
    headers : {
      Authorization:token
    }
  }

  const response = await axios.get(`${API_URL}/home`, config )
     

    if (response.data==="Invalid Token") {
      alert("Login Again ")
    } else if (response.data === "Server Busy" ){
      alert("Unauthroized access")
    }else if (response?.status) {
      setRes(response.data)
    }
    
  }catch (e) {
    console.log(e)
  }
}
  return (
    <Container> 
    <h1>Welcome</h1>
    <p>login sucusss</p>
    <p>Mr. {res.name}</p>
    <Button variant='primary' type='submit' > Get started</Button>
    </Container>
  )
}

export default Home