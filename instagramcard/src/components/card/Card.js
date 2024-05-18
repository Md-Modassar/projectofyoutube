import React, { useState } from 'react'
import "./card.css"
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";


const Card = () => {
  const [heart,setHeart]=useState(false)
  const [like,setLike]=useState(false)
  const [count,setCount]=useState(4)

  const handelheart=()=>{


    if(like){
      setCount(count-1)
    }else{
      setCount(count+1)
    }
    if(!like){
      setHeart(true)  
     }

  setLike(!like)
  

    setTimeout(()=>setHeart(false),1000)

  }

  const handellike=()=>{
    if(like){
      setCount(count-1)
    }else{
      setCount(count+1)
    }
    setLike(!like)
  }
  

  return(
    <div className='card' onClick={handelheart}>
     {heart && <FaHeart className='heart'/>}
      <div className='item'>
        <div className='profile'>
          <img src='https://media.istockphoto.com/id/1524823935/vector/cute-cartoon-rabbit-in-the-garden.jpg?s=612x612&w=0&k=20&c=-AzvJxlra5ISSo8VNUDFwbrkINnh9_8KF96bq3m9oBI=' 
          alt='' />
          <span>thisyourProfile</span>
          <button>follow</button>
        </div>
        <div className='icon'>
          {like?(<FaHeart className='red-heart'onClick={handellike} />):
           (<CiHeart className='icon1' onClick={handellike}/>)}
           <p>{count}</p>
           <BiMessageRounded className='icon1'/>
           <p>12</p>
           <CiLocationArrow1 className='icon1'/>
           <p>10</p>
        </div>

      </div>
      <p>this is my wonderful night &#128512; &#10084;</p>

    </div>
  )
}

export default Card