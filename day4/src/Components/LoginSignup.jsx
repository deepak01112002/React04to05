import React, { useState } from 'react'

function LoginSignup() {
    const [state,setState] = useState(true)
  return (
    <div>
        {state == true ? <div id='Login'>
             <h1>Login</h1>
            <input type="text" />
            <input type="text" />
            <input type="submit" /><br />
            <span onClick={()=>{setState(false)}} >New to Website ? Create Account</span>
        </div> :
        <div id='Signup'>
            <h1>Signup</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" /><br />
            <span onClick={()=>setState(true)}>Already an account ? Login</span>
        </div>}
    </div>
  )
}

export default LoginSignup