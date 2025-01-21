import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Product() {
   
    const [state,setState] = useState([])

    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products`)
       .then((res)=>{
           setState(res.data); 
       })
       .catch((err)=>{
          console.log(err);
       })
    },[])



  return (
    <div>
       {
        state.map((el,index)=>{
            return <div key={index}>
                <img src={el.image} alt="" width={100}/>
                <h1>{el.title}</h1>
            </div>
        })
       }
    </div>
  )
}

export default Product