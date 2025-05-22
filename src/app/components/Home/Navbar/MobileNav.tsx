'use client'
import React from 'react'
import { NavLinks } from '../../../../../constents/constents'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'




type Props={
  open:boolean,
  close:()=>void
}


const MobileNav = ({open,close}:Props) => {

  const navOpen = open ?"translate-x-0":"translate-x-[-100%]";

  return (
    <div>

      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}> </div>

      <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}>


        {
          NavLinks.map((nav) => (
            <Link href={nav.url} key={nav.id}>
              <p className='nav_Link  text-white text-[20px]  ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                {nav.label}
              </p>
            </Link>
          ))
        }
{/*  close hambugerss */}

<CgClose onClick={close} className='absolute top-[0.7rem]  right-[1.4rem] sm:w-8 sm:h-8 h-6 w-6 cursor-pointer'/>

      </div>
    </div>


  )
}

export default MobileNav
