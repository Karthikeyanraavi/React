import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Lay from "./Lay"
import './App.css'
export default function App()
{
  return(
    <BrowserRouter>
    <div class="app">Web Master</div>
    <Routes>
      <Route path="/" element ={<Lay/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}



