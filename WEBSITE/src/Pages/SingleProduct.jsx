import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const {id} = useParams()
  const [state,setState] = useState({})
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setState(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
  
  return (
    <div>
        <div key={state.id} className="card" style={{width: "18rem"}}>
               <img src={state.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{state.title}</h5>
                <p className="card-text">{state.description} - ₹ {state.price}</p>
                <a className="btn btn-primary">Add To Cart</a>
              </div>
            </div>
    </div>
  )
}

export default SingleProduct