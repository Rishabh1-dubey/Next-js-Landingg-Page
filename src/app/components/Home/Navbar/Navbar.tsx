import React from 'react'
import { NavLinks } from '../../../../../constents/constents'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";




type Props={
  openNav:()=>void
}
const Navbar = ({openNav}:Props) => {
  return (
    <div className='w-full transition-all duration-200 h-[12vh] z-[1000]'>

      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        <h1 className='text-xl md:text-2xl font-bold'>

          <span className='text-3xl md:text-4xl text-pink-700'>A</span>
          Ppify
        </h1>

        {/* -------------------------------- NavLinks---------------- */}
        <div className='hidden lg:flex items-center space-x-10'>
          {
            NavLinks.map((nav) => (
              <Link href={nav.url} key={nav.id}>

                <p className='nav_Link' >{nav.label} </p>
              </Link>
            ))
          }
        </div>

{/* Buttons */}

<div className='flex items-center space-x-4'>
  <button className='md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full'>Join Now</button>
</div>
<RxHamburgerMenu onClick={openNav} className='h-8 w-8 cursor-pointer md:hidden' />

      </div>

    </div>
  )
}

export default Navbar