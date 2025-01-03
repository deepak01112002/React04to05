import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import LoginSignup from './Components/LoginSignup'

function App() {
  
  const [state,setState] = useState(true)

  const handleHide = ()=>{
     setState(!state)
  } 

  return (
       <div>
         {state == true ? <h1>Loading........</h1> : <Counter/>}
         <button onClick={handleHide}>Hide/Show</button>
         <LoginSignup/>
      </div>  
  )
}

export default App
