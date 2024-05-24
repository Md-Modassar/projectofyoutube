import React, { useState } from 'react'
import "./tempreture.css"



const Tempreture = () => {

    const [count,setCount]=useState(0)

    const getbackground=()=>{
        if(count<20){
            return 'lightblue'
        }else if(count<30){
            return 'lightgreen'
        }else if(count<40){
            return 'orange'
        }else {
            return 'red'
        }
    }
 
  return (
    <div className='div'>
     <span style={{background:getbackground()}}>{count} °c</span>
     <div className='btn'>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
     </div>
    </div>
  )
}

export default Tempreture