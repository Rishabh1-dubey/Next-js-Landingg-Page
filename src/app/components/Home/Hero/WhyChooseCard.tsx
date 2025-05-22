
import React from 'react'

type Props={
  title:string
  image:string
  linkText:string

}

const WhyChooseCard = ({title,image,linkText}:Props) => {
  return (
    <div>
   <img src={image} width={80} height={80} className='object-contain mx-auto'/>
   <h1 className='mt-6 mb-6 text-xl font-semibold text-center'>{title}</h1>
   <p className='text-center mb-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quis perferendis recusandae.</p>
   <p className='text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer'>{linkText} &#8594;</p>
    </div>
  )
}

export default WhyChooseCard