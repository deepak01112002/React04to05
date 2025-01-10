import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [state,setState] = useState({
    title : ""
  })
  const [valid,setValid] = useState(false)
  console.log(state);
  
  const handleBlur = ()=>{
    let regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/
    if(regex.test(state.title) == false){
       setValid(true)
    }
  }

  const handleFocus  = ()=>{
     setValid(false)
  }

  return (
    <>
      <form action="">
          <input type="text" name='title' onChange={(e)=>setState({...state,[e.target.name]: e.target.value})} style={{borderColor : valid ? "red" : ""}} placeholder='Username' onBlur={handleBlur} onFocus={handleFocus}/>
          {valid ? <p>Title length is smaller</p> : ""}
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />
          <input type="submit" />
      </form>
    </>
  )
}

export default App
