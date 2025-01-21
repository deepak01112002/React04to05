import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AllCollapseExample from './Components/Accordion'
// import Skel from './Components/Skel'
import { Button } from "@/components/ui/button"


function App() {
  
   const [formData,setFormData] = useState({
      name : "",
      class : "",
      email : "",
      skills : [""],
      hobbies : [""]
   })

   const handleChange = (e)=>{
       const {name,value} = e.target
      //  if(isNaN(name)){
         setFormData({...formData,[name] : value})
      //  }else{
      //    let arr = [...formData.skills]  // [""]
      //    arr[name] = value // arr[0] = value
      //    setFormData({...formData,skills : arr})
      //  }
   }
   console.log(formData);
   
   const handleSkills = (e,index)=>{
     let val = e.target.value
     let arr = [...formData.skills]
     arr[index] = val
     setFormData({...formData,skills : arr})
     
   }
   const handleDelete = (index)=>{
     console.log(index);
     let arr = [...formData.skills]
     arr.splice(index,1)
     setFormData({...formData,skills : arr})
     
   }

   const handleAdd = ()=>{
     setFormData({
      ...formData,
      skills : [...formData.skills,""]
     })
   }

  return (
    <>
      <form action="">
          <input type="text" name='name' placeholder='Name' onChange={handleChange}/>
          <input type="text" name='class' placeholder='Class' onChange={handleChange}/>
          <input type="text" name='email' placeholder='Email' onChange={handleChange}/>
          <input type="button" value="Add" onClick={handleAdd}/>
          {
            formData.skills.map((el,index)=>(
                <>
                <input type='text' name="skills" onChange={(e)=>handleSkills(e,index)} placeholder='Skill' />
                { formData.skills.length > 1 ? <input type="button" onClick={()=>handleDelete(index)} value={"del"} /> : ""}
                </>
            ))
          }
          <input type="submit" />
      </form>
      <AllCollapseExample/>
      <div>
         <div>
            {/* <Skel/> */}
            <Button>Click me</Button>
            <Button>Click me</Button>
         </div>
         <div>
           
         </div>
      </div>
    </>
  )
}

export default App
