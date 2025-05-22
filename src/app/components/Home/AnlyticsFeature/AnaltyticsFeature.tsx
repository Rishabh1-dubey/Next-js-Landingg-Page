import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnaltyticsFeature = () => {
    return (
        <div className='pt-24 pb-16'>
            {/* Define grid */}

            <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Image content */}

                <div>
                    <img src="/images/a.jpg" alt='imges' width={500} height={500} className='object-contain' />
                </div>
                {/* Text content */}

                <div className='p-6'>
                    <h1 className='text-base font-semibold text-orange-500'>
                        Audience tracking and insight</h1>
                    <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
                        Powerful AnaltyticsFeature tools that can give power to your app and fully customizable
                    </h1>
                    <p className='mt-4 text-gray-600 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab porro non debitis odit neque suscipit, vitae possimus quia aliquid, itaque veritatis expedita, velit quae voluptate!</p>
                    <ul className='mt-7 space-y-3 text-gray-800'>
                        <li className='flex items-center font-semibold gap-2 '>

                            <FaCheckCircle className='text-green-400  ' />
                            Chat Prompt Module Support
                        </li><li className='flex items-center font-semibold gap-2 '>

                            <FaCheckCircle className='text-green-400  ' />
                            Enjoy unlimited features by paid plan

                        </li><li className='flex items-center font-semibold gap-2 '>

                            <FaCheckCircle className='text-green-400  ' />
                            Manage ultimate conversation
                        </li>
                    </ul>
                    <button className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white cursor-pointer'>Explore More &rarr; </button>
                </div>





            </div>


        </div>
    )
}

export default AnaltyticsFeature