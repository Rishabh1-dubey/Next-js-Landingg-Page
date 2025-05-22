"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const Responsive = () => {
const[showNav, setShowNav] = useState(false)

// const handleShowNav=()=>{
//   setShowNav(true)
// }

// const handleHideNav=()=>{
//   setShowNav(false)
// }


const toggleNav=()=>{
  setShowNav(prev=>!prev)
}
  return (
    <div>
        <Navbar openNav={toggleNav}/>
    <MobileNav open={showNav} close={toggleNav}/>
    </div>
  )
}

export default Responsive