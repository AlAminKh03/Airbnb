import React from 'react'
import Image from 'next/image'



const Banner:React.FC=() =>{
    const src='https://a0.muscache.com/im/pictures/5471ae21-17a7-4ba3-9a80-ddbf95b53d0a.jpg?im_w=1200'
  return (
   <div className='relative h-auto  '>
     <div className='hidden sm:inline-block'>
        <Image  loader={()=>src} 
        src='https://a0.muscache.com/im/pictures/5471ae21-17a7-4ba3-9a80-ddbf95b53d0a.jpg?im_w=1200'
        alt='banner image' 
        className="rounded-lg absolute left-1/3 "
         width={800} height={650} >
        </Image>
        </div>
        {/* form  */}
        <div className='absolute z-10  rounded-xl shadow-2xl p-4 ml-5 md:top-24 md:left-24 bg-white'>
            <p className='text-4xl font-bold'>Vacation rentals in all <br />over the world</p>
            <p className='m-2 text-gray-500'>Book unique vacation rentals, houses, and more on Airbnb</p>

            {/* first part  */}
            <div className='border-2 rounded-lg m-0 p-0 '>
                <p className='text-sm font-bold p-1.5 pl-3'>Location</p>
                <div className='flex m-0 p-0'>
                <input className=' flex-grow outline-none bg-transparent pl-3 pb-1 text-sm text-gray-600 placeholder-gray-400 ' 
                    type="text" placeholder='USA'/>
               </div>
            </div>

            {/* middle part  */}
            <div className='flex mt-1 mb-1'>
               <div className='border-2 rounded-lg m-0 p-0 '>
                    <p className='text-sm font-bold p-1.5 pl-3'>CHECK IN</p>
                        <div>
                            <input  className='outline-none bg-transparent pl-3 text-sm text-gray-600 placeholder-gray-400' 
                            type="text" placeholder='Add Date' />
                        </div>
               </div>
                <div className='border-2 rounded-lg m-0 p-0 '>
                    <p className='text-sm font-bold p-1.5 pl-3'>CHECK OUT</p>
                        <div>
                        <input className='outline-none bg-transparent pl-3 text-sm text-gray-600 placeholder-gray-400'
                        type="text" placeholder='Add Date' />
                        </div>
                </div>
            </div>

            {/* third part  */}
            <div className='flex mb-1'>
            <div className='border-2 rounded-lg m-0 p-0 '>
                    <p className='text-sm font-bold p-1.5 pl-3'>CHECK OUT</p>
                        <div>
                        <input className='outline-none bg-transparent pl-3 text-sm text-gray-600 placeholder-gray-400'
                        type="text" placeholder='Add Date' />
                        </div>
                </div>
                <div className='border-2 rounded-lg m-0 p-0 '>
                    <p className='text-sm font-bold p-1.5 pl-3'>CHECK OUT</p>
                        <div>
                        <input className='outline-none bg-transparent pl-3 text-sm text-gray-600 placeholder-gray-400'
                        type="text" placeholder='Add Date' />
                        </div>
                </div>
            </div>
            <div className='flex justify-center active:scale-90 transition duration-150 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-0'>
            <button className=' p-4 text-white font-bold '>Search</button>
            </div>
        </div>
   </div>
  )
}
export default Banner