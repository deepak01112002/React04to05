import React, { useEffect, useState } from 'react'

function Product() {
    const [state,setState] = useState(JSON.parse(localStorage.getItem("data"))||[])

    useEffect(()=>{
       localStorage.setItem("data" , JSON.stringify(state))
    },[state])
    
    const handleDelete=(i)=>{
     
        let a = state.filter((el)=>{
            return el.id != i
        })
        setState(a)
    }
  return (
    <div>
        <h1>Products</h1>
        {
            state.map((el)=>{
                return <>
                     <img src={el.img} alt={el.title}/>
                     <p>{el.title} - {el.des}</p>
                     <button onClick={()=>handleDelete(el.id)}>Delete</button>
                     <button>Edit</button><br />
                </>
            })
        }
    </div>
  )
}

export default Product