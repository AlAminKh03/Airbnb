import React from 'react'
import Image from 'next/image'

type Props = {}

const LargeCard=({}: Props)=> {
    const src= "https://links.papareact.com/4cj"
  return (
    <section className='relative py-10'>
        <div className='relative h-80 min-w-[300px]'>
            <Image loader={()=>src} src={src} layout="fill" objectFit='cover' className='rounded-2xl'></Image>
           
        </div>
        <div className='absolute top-20 py-10 px-8'>
            <p className='text-2xl mb-3 w-56'>The Greatest Outdoors</p>
            <p>wishlist created by Airbnb</p>
            <button className='bg-gray-900 text-white text-sm px-4 py-2 rounded-md mt-5'>Get inspired</button>
        </div>
    </section>
  )
}
export default LargeCard;