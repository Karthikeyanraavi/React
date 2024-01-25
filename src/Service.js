import React from 'react'
import './Service.css'
import dash from './i1.jpeg'
import helo from './i2 - Copy.jpeg'
export default function Service() {
  return (
    
    <div className='grid-container'>
       <div class="grid-item">
          <img src={dash} ></img>
        </div>
        <div class="grid-item" >
            <img src={helo}></img>
        </div>
        <div class="grid-item" >
            <img src={dash}></img>
        </div>
        <div class="grid-item">
        <img src={helo}></img>
        </div>
        <div class="grid-item" >
        <img src={dash}></img>
        </div>
        <div class="grid-item" >
        <img src={helo}></img>
        </div>
    </div>
  )
}
