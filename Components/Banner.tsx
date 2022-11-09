import React from 'react'
import Image from 'next/image'



const Banner:React.FC=() =>{
    const src='https://a0.muscache.com/im/pictures/5471ae21-17a7-4ba3-9a80-ddbf95b53d0a.jpg?im_w=1200'
  return (
    <div className='flex max-w-full h-full mt-2 mb-4 '>
           {/* form  */}
           <div className=' z-10 rounded-xl shadow-2xl p-4 mt-14 md:ml-48 md:mr-[-190px] mx-auto bg-white w-[400px] h-[430px]'>
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
        <div className='hidden sm:inline-block ml-24'>
        <Image  loader={()=>src} 
        src='https://a0.muscache.com/im/pictures/5471ae21-17a7-4ba3-9a80-ddbf95b53d0a.jpg?im_w=1200'
        alt='banner image' 
        className="rounded-lg "
        width={800} height={650}>
        </Image>
        </div>
     
   </div>
  )
}
export default Banner