import React from 'react'
import './Sana.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Sana = () => {
  const a = ()=>{
    alert("you are")
  }
  const b = ()=>{
    alert("you are goona")
  }
  return (
    <div>
      <h1 className='y'>hello</h1>
      <Button variant="primary" onClick={a}>Primary</Button>
      <input onChange={b} type='text'/>
    </div>
  )
}

export default Sana
