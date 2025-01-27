import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [state,setState] = useState({
        username : "",
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const handleChange = (e)=>{
         const {name,value} = e.target
         setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`https://website-53tn.onrender.com/users`,state)
        .then((Res)=>{
            alert("User Registered Succesfully")
            navigate("/login")
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    
    return (
        <div style={{ height: "300px", width: "30%" }}>
         <Form onSubmit={handleSubmit}>
            <Form.Label  htmlFor="inputPassword5">Username</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                name='username'
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                name='email'
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                name='password'
                onChange={handleChange}
                aria-describedby="passwordHelpBlock"
            />
            <Form.Control
                type="submit"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
           </Form>    
        </div>
    )
}

export default Signup