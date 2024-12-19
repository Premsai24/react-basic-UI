import React, { useState, useEffect } from 'react'
 
const Statemgm = () => {
    const [city,setCity]= useState("Hyderbad");

    useEffect(()=>{
      if (city==="Hyderbad"){
        setCity("Banglore")
      }else{
        setCity("Delhi")
      }
    },[city])
    
  return (
    <div>
      <h1>I Live in {city}</h1>
    </div>
  )
}

export default Statemgm