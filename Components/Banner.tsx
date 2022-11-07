import React from 'react'
import Image from 'next/image'



const Banner:React.FC=() =>{
    const src='https://a0.muscache.com/im/pictures/5471ae21-17a7-4ba3-9a80-ddbf95b53d0a.jpg?im_w=1200'
  return (
    <div className='relative'>
        <Image  loader={()=>src} 
        src='https://a0.muscache.com/im/pictures/5471ae21-17a7-4ba3-9a80-ddbf95b53d0a.jpg?im_w=1200'
        alt='banner image' width={500} height={500} className="object-contain"></Image>
    
        </div>
  )
}
export default Banner