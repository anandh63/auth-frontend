import { useState } from 'react'
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
     
    <Routes>
      <Route path='/' element={ <SignUp/>} />
      <Route path='/SignUp' element={ <SignUp/>} />
      <Route path='/Login' element={ <Login/>} />
      <Route path='/Home' element={ <Home/>} />
    </Routes>
      {/*<SignUp /> */}

    </>
  )
}

export default App;
