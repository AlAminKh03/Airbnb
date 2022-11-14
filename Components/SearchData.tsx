import React from 'react';
import { SearchDataProps } from '../Interfaces/Interfaces';
import { HeartIcon } from '@heroicons/react/24/outline';
import {StarIcon} from '@heroicons/react/24/solid';
import Image from 'next/image'
interface SearchProps{
    data:SearchDataProps
}


 const SearchData:React.FC<SearchProps>=({data})=> {
  const src= `${data.img}`
  return (
  <div className='flex py-7 px-2 border-b cursor-pointer
  hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t'>
      <div className='relative h-36 w-40 flex-shrink-0 '>
      <Image 
      loader={()=>src}
      src={data.img} 
      layout="fill"
      objectFit='cover' className='rounded-lg'/>
      </div>
      <div className='flex flex-col flex-grow pl-6'>
        <div className='flex justify-between'>
          <p>{data.location}</p>
            <HeartIcon className='h-4 w-4'/>
        </div>
        <p className='text-xl'>{data.title}</p>
        <div className='border-b w-10 pt-2'></div>
          <p className='text-xs text-gray-500 flex-grow'>{data.description}</p>
          <div className='flex justify-between'>
            <p className='flex items-center'>
              <StarIcon className='w-4 h-4 text-red-400'/>
              {data.star}
            </p>
            <div>
              <p className='font-bold'>{data.price}</p>
              <p className='text-xs text-right text-gray-500'>{data.total}</p>
            </div>
          </div>
      </div>
  </div>
  )
}
export default SearchData;