import React, { useState } from 'react'

const Hooks = () => {
    const[name,setname]=useState("adhil")
    const[count,setcount]=useState(0)
    const changename=()=>{
        setname("sana")
    }
    const incriment=()=>{
        setcount(count+1)
    }
    const decriment=()=>{
        setcount(count-1)
    }


  return (
    <div>
        <h1>my name is{name}</h1>
        <button onClick={changename}> click me</button>
        <h1>count s {count}</h1>
        <button onClick={incriment}>+</button>
        <button onClick={decriment}>+</button>
    </div>
  )
}

export default Hooks