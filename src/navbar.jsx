import React from 'react'
import { useState } from 'react'

 import './navbar.css'
function Navbar(){
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  
  return (
    <div className="testname">
      <h1>Welcome to Antony Software world...</h1>
    </div>
    )
  
}

export default Navbar