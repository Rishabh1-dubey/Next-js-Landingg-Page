import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhychooseYou = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
        Why You Choose this Application
      </h1>
      <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>

        <div>
          <WhyChooseCard image="images/i1.png" title="Create Free Account" linkText="Start Earning  " />

        </div> 

        <div>
          <WhyChooseCard image="images/i2.png" title="Monitor User Analytics" linkText="Sign up your Account" />
        </div> 

        <div>
          <WhyChooseCard image="images/i3.png" title="Safe and Trusted" linkText="Get the App" />
        </div> 

        <div>
          <WhyChooseCard image="images/i4.png" title="Fast Customer Support" linkText="Learn more" />
        </div>
      </div>


    </div>
  )
}

export default WhychooseYou