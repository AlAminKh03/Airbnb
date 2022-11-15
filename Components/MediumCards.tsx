import React from 'react'
import { PropsForMediumCard } from '../Interfaces/Interfaces';
import Image from 'next/image'

interface MProps{
    mediumData:PropsForMediumCard
}


const MediumCards:React.FC<MProps>=({mediumData})=> {
    const src= `${mediumData.img}`
  return (
<div className=' hover:scale-105 transition transform ease-out   '>
  <div className='relative w-60 h-60'>
<Image loader={()=>src} src={mediumData.img} alt={"medium image"} layout='fill' className='rounded-lg'></Image>

 </div>

  <p className='text-xl mt-3'>{mediumData.title}</p>

 </div>
  )
}
export default MediumCards;