import React from 'react'
import Image from 'next/image';
import { PropsModel  } from '../Interfaces/Interfaces';
 interface listProps{
    lists:PropsModel
 }

const SmallerCards:React.FC<listProps>=({lists}) =>{
    const src=`${lists.img}`
  return (
    <div className='flex space-x-2 items-center m-2 mb-4 cursor-pointer rounded-xl 
    hover:scale-105 hover:bg-gray-100 transition transform duration-150 ease-out'>
    {/* for pictures  */}
    <div className='relative h-16 w-16'>
    <Image loader={()=>src} src={lists.img} alt={"picture"} fill className='rounded-lg'></Image>
    </div>
    {/* for information */}
        <div>
        <p>{lists.location}</p>
        <p className='text-gray-500'>{lists.distance}</p>
        </div>
    </div>
  )
}
export default SmallerCards;