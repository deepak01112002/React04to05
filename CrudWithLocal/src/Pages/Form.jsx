import React, { useEffect, useState } from 'react'
import {v4} from 'uuid'
function Form() {
    const [state,setState] = useState({
        title : "",
        img : "",
        des : "",
        id : v4()
    })
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

    const handleChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
       setArr([...arr,state])
       setState({
          title : "",
          img : "",
          des : "",
          id :  v4()
       })
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
             <input type="text" value={state.title} placeholder='Title' name='title' onChange={handleChange}/>
             <input type="text" value={state.des} placeholder='Description' name='des' onChange={handleChange}/>
             <input type="text" value={state.img} placeholder='Image URL' name='img' onChange={handleChange}/>
             <input type="submit" />
        </form>
    </div>
  )
}

export default Form