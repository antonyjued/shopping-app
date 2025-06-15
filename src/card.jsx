import React from 'react'
import { useState } from 'react'
import Logo from './assets/checkout.png'

import './Card.css'
function Card(){
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  
  return (
    <div className="card">
      <img src={Logo} className="react-logo"/><br/>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          Add Cart : {count1}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          Add Orders : {count2}
        </button>
        
    </div>
    )
  
}

export default Card