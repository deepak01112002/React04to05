import { useState,Fragment, useRef, useEffect } from 'react'
import './App.css'

function App() {
   
    const titleRef = useRef(null)
  
    useEffect(()=>{
      titleRef.current.style.backgroundColor = "red"
    },[])
     
  
  
   
  return (
      <>
         <form action="" >
            <input type="text" ref={titleRef} name='title'  id='title'/>
            <input type="text" name='email'  />
            <input type="submit" />
         </form>
      </>
  )
}

export default App
