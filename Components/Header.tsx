import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassCircleIcon,GlobeAltIcon,UserCircleIcon,Bars3Icon} from '@heroicons/react/24/solid'



 const Header:React.FC=() =>{
    const src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' 
  
    return (
         <header className='sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-4 md:px-10'>

{/* logo  */}
            <div className='relative flex items-center h-7 mt-2'>
            <Image className='cursor-pointer object-contain object-left' loader={()=>src } src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' 
                alt='airbnb logo' fill ></Image>
            </div>


{/* searchbar  */}
<div className='flex items-center border-2 rounded-full py-1 md:shadow-sm 
hover:md:shadow-md hover:transition-all'>
    <input className=' flex-grow outline-none bg-transparent pl-3 text-sm text-gray-600
    placeholder-gray-400' type="text" placeholder='Find your destination' />
    <MagnifyingGlassCircleIcon 
    className='h-8 hidden md:inline-flex text-red-500  rounded-full pl-1.5 pr-1.5 '/>
</div>

{/* login  */}
<div className='flex items-center space-x-4 justify-end'>
    <p className=' font-semibold cursor-pointer hidden md:inline hover:bg-gray-100 p-2 rounded-full'>Become a host</p>
    <GlobeAltIcon className='h-5 cursor-pointer hover:bg-gray-100 rounded-full'/>
    <div className='flex border-2 rounded-full p-1 items-center space-x-2
    cursor-pointer hover:shadow-md'>
    <Bars3Icon className='h-5 text-gray-900'/>
    <UserCircleIcon className='h-8 text-gray-500'/>
    </div>
</div>
</header>
  )
}
export default Header;