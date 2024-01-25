import React from 'react'
import './Helo.css'
import i1 from './Capgemini-Logo-1 (1).webp'
import i2 from './yamaha.jpg'
import i3 from './dell.png'
import i4 from './shell.png'
import i5 from './MS - Copy.jpg'
export default function Helo() {
  return (
    <div>
        <div class="s4">
        <img src={i1} style={{width:"100px",height:"100px"}}></img>
        <img src={i2} style={{width:"100px",height:"100px"}}></img>
        <img src={i3} style={{width:"100px",height:"100px"}}></img>
        <img src={i4} style={{width:"100px",height:"100px"}}></img>
        <img src={i5} style={{width:"100px",height:"100px"}}></img>
    </div>
    </div>
  )
}
