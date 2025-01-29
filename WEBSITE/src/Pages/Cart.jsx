import axios from 'axios'
import React, { useEffect } from 'react'

function Cart() {
  useEffect(()=>{
    axios.get(`https://website-53tn.onrender.com/cart?useremail=dee@gmail.com`)
    .then((res)=>{
       console.log(res)
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>Cart</div>
  )
}

export default Cart