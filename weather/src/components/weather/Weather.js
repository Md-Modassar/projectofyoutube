import React, { useState } from 'react'
import data from "./data.js"
import "./weather.css"

const Weather = () => {
    

    const [data1,setData1]=useState({})

    const serachdata=(e)=>{
        const finddata=data.filter((ele)=>ele.city.toLowerCase()===e.target.value.toLowerCase())

        setData1(finddata[0])
    }

    

  return (
    <div className='weather-container'>
      <input type='text' placeholder='search city' onChange={serachdata}/>
      <div className='weather'>
        <div className='weather-left'>
        <img src={data1?.image} alt='' />
        </div>
        <div className='wearther-right'>
         <span>{data1?.day}</span>
         <span>{data1?.city}</span>
         <span>temperature:{data1?.temperature}</span>
         <span>clear wearther</span>
        </div>

      </div>
      <div className='wearther-card'>
        {
            data1?.forecast?.map((ele,index)=>(
                <div className='cartitem'>
                    <span>{ele.day}</span>
                    <img src={ele.image} alt='' />
                    <span>{ele.temperature}</span>
                </div>
            ))
        }

      </div>
    </div>
  )
}

export default Weather