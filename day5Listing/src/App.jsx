import { useState,useEffect } from 'react'

import './App.css'


function App() {
   const [state,setState] = useState(0)
   const [data,setData] = useState(null)
   useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then((Res)=>Res.json())
        .then((Res)=>{
          console.log(Res.products);
          
        setData(Res.products)
        })
        .catch((err)=>{
        console.log(err)
        })
   },[])
   
  return (
    <>
      <h1>{state}</h1>
      <button onClick={()=>setState(1)}>click</button>
      {
       data ? data.map((el)=>{
             return <div>
                   <img src={el.thumbnail} alt={el.title} />
                   <p>{el.title}</p>
             </div>
        }) : <h1>Loading.....</h1>
      }
    </>
  )
}

export default App








// function fet(){
//   fetch(`https://dummyjson.com/products`)
//   .then((Res)=>Res.json())
//   .then((Res)=>{
//    console.log(Res.products)
//   })
//   .catch((err)=>{
//    console.log(err)
//   })
//  }
//  fet()