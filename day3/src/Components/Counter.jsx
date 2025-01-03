import React from 'react'
import {useState} from "react"
import Counter2 from './Counter2'
function Counter() {
   
     const [state,setState] = useState(10)
     

     const handleIncrease = ()=>{
        setState(state + 1)
     }
     function handleDecrease(){
       setState(state - 1)
     }
     
  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <h1>{state}</h1>
      <Counter2 deepak={state}/>
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter