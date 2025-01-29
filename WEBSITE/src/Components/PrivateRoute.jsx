import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Men from '../Pages/Men'

function PrivateRoute({children}) {
    
    const [state,setState] = useState(localStorage.getItem("isLoggedIn") || false)
    
    console.log(state);
    
  return (
   <>
        {  state == "true" ? children :  <Navigate to={"/login"}></Navigate> }
   </> 
  )
}

export default PrivateRoute