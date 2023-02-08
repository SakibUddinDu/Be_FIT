import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {

  return (
    <div> 
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
