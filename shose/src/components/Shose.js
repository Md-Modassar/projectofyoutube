import React from 'react'
import "./shose.css"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import pinkshoe from "../images/pinkshose.png"
import data  from './data';

const Shose = () => {
  return (
    <div className='shose'>
        <div className='s-header'>
            <div className='h-logo'>
                <span>SHOSE</span>

            </div>
            <div className='s-menu'>
                <span>New</span>
                <span>Men</span>
                <span>Women</span>
                <span>Brands</span>
            </div>
            <div className='icons'>
                <IoIosSearch/>
                <HiOutlineShoppingBag/>
            </div>

        </div>
        <div className='s-home'>
            <div className='s-home-left'>
                <span>SHOE AIR</span>
                <span>ZOOM SUPER</span>
                <span>REP CIRAL</span>
                <button>SHOP NOW</button>
            </div>
            <div className='s-home-right'>
              <span>AIR</span>
              <img src={pinkshoe} alt=''/>
            </div>

        </div>
        <div className='s-bottom'>
          <span>MODEL</span>
          <span>BRANDS</span>
          <span>COLOR</span>
          <span>PRICE</span>

          <button>SHOP NOW</button>
        </div>
        <div className='s-container'>
          {
            data.map((ele,i)=>(
                <div className={i===0?'s-card':i===1?"s-card1":"s-card2"}>
                  <img src={ele.image} alt='' className='s-card-img'/>
                  <span className='s-card-span'>{ele.des}</span>
                  <button className='s-card-btn'>shop Now</button>
                </div>
            ))
          }
        </div>

    </div>
  )
}

export default Shose