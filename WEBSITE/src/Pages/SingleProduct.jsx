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
  const handleAdd = ()=>{
    let obj = {
       product : state,
       useremail : localStorage.getItem("userEmail"),
       quantity : 1
    }
    axios.get(`https://website-53tn.onrender.com/cart?useremail=dee@gmail.com`)
    .then((res)=>{
       let a = res.data.find((el)=>el.product.id == id)
       if(a == undefined){
            axios.post(`https://website-53tn.onrender.com/cart`,obj)
            .then((res)=>{
              alert("Product added successfully")
              console.log(res.data)
            })
            .catch((err)=>console.log(err))
       }else{
          alert("Product is already in Cart !!!")
       }
       
    })
    .catch((err)=>console.log(err))
    
    
  }
  return (
    <div>
           <div key={state.id} className="card" style={{width: "18rem"}}>
               <img src={state.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{state.title}</h5>
                <p className="card-text">{state.description} - ₹ {state.price}</p>
                <a className="btn btn-primary" onClick={handleAdd}>Add To Cart</a>
              </div>
            </div>
    </div>
  )
}

export default SingleProduct