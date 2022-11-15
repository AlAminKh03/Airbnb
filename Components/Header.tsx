import React, { useState } from 'react'
import Image from 'next/image'
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UserIcon} from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { useRouter } from 'next/router';

interface RangeProps{
   startDate: Date
   endDate: Date
   key:string
}
interface PlaceholderProps{
  placeholder: string
}



// ****FUNCTION START 
 const Header:React.FC<PlaceholderProps>=({placeholder}):JSX.Element =>{
    const [searchInput, setSearchInput] =useState<string>('')
    const [startDate,setStartDate] = useState<Date>(new Date())
    const [endDate,setEndDate] = useState<Date>(new Date())
    const [numOfGuest, setnumOfGuest] = useState<number>(1)

    
    const selectionRange :RangeProps = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

      const handleChange=(ranges:any)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
      }

      const handleCancleButton:React.MouseEventHandler<HTMLButtonElement>=()=>{
        setSearchInput("")
      }
      
      const searchHandle:React.MouseEventHandler<HTMLButtonElement> =()=>{
      router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        startDate:startDate.toDateString(),
        endDate:endDate.toDateString(),
        numOfGuest:numOfGuest
      }
})}

      const router = useRouter()
      const src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' 
  
      // **RETURN STATEMENT 

    return (
         <header className='sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-4 md:px-10'>

{/* logo  */}
            <div onClick={()=>router.push('/')} className='relative flex items-center h-7 mt-2'>
            <Image className='cursor-pointer object-contain object-left' loader={()=>src } src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' 
                alt='airbnb logo' layout='fill' ></Image>
            </div>


            {/* searchbar  */}
            <div className='flex items-center border-2 rounded-full py-1 md:shadow-sm 
                hover:md:shadow-md hover:transition-all'>
            <input 
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className=' flex-grow outline-none bg-transparent pl-3 text-xs text-gray-600
             placeholder-gray-400' 
             type="text" 
             placeholder={placeholder || 'Find your destination'}  />
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
            {searchInput&& 
          <div className='flex flex-col col-span-3 m-auto'>
              <div >
              <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleChange}
            />
              </div>
          <div className='flex border-b mb-4'>
                <p className='text-xl font-semibold flex-grow'>Number of guests</p>
                <UserIcon className='h-4 pr-3'/>
                <input type="number" min={1} value={numOfGuest} onChange={(e)=>setnumOfGuest(parseInt(e.target.value))}
                className='outline-none w-12 h-4 text-lg text-red-400'/>
          </div>

          <div className='flex'>
            <button onClick={handleCancleButton} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={searchHandle} className='flex-grow text-red-400'>Search</button>
          </div>
      </div> }
        </header>
        )
}
export default Header;