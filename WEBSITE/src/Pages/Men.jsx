import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Men() {
  const [state,setState]  = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products?limit=10`)
    .then((Res)=>{
      setState(Res.data);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[])
  const handleRedirect = (id)=>{
     navigate(`/product/${id}`)
  }
  
  return (
    <div style={{display : "grid", gridTemplateColumns : "repeat(3,1fr)", margin : "auto" }}>
       {
          state.map((el)=>{
              return <div onClick={()=>handleRedirect(el.id)} key={el.id} className="card" style={{width: "18rem"}}>
               <img src={el.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{el.description} - ₹ {el.price}</p>
               
              </div>
            </div>
          })
       }
    </div>
  )
}

export default Men