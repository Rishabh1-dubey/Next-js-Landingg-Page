import React from 'react'

const Hero = () => {
  return (
    <div className='w-fit  lg:mt-[-10vh] pt-[4vh] md:pt-[12vh] h-screen bg-slate-300'>
      <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          {/* Text Content */}
          <div>
            <div className='w-fit py-1.5 px-2 mc:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
              <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>News
              </div>
              <p className='text-xs sm:text-sm'>
                We have updated our term & conditional policy
              </p>
            </div>
            <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6  font-bold md:leading-[3rem] lg:leading-[3.5rem] '>The Premier workspace comparsion for your daily needs</h1>
            <p className='mb-6 mt-4 font-normal sm:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem consectetur temporibus suscipit impedit nulla assumenda ipsam rem quas veritatis?</p>


            {/* Goole Play images */}
          <div className='flex items-center  gap-3  justify-center w-fit'>
            <img className='object-contain' src="images/gp.png"/>
            <img className='object-contain' src="images/as.png"/>
          </div>
          </div>

          {/* Image generation */}
          <div className='hidden lg:block'>
            <img src="/images/hero.png" alt='hero' width={700} height={700} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero