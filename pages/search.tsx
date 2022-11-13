import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

interface DateProps{
    location: string
startDate: string
endDate:string
numOfGuest:number
}

const Search=()=> {
    const router = useRouter()
    const {location,startDate,endDate,numOfGuest}= router.query;

    console.log(startDate)
    console.log(endDate)

    const formattedEndDate = endDate?.slice(4)
    const formattedStartDate = startDate?.slice(4)
      


    const rangeofDate = `${formattedStartDate} -- ${formattedEndDate}`
  return (
   <div>
    <Header placeholder={`${location} | ${rangeofDate} | ${numOfGuest} Guests`} />
   <main>
    <section className='pt-12 pl-6 pb-4 space-y-3'>

        <p className='text-xs font-semibold'>300+ satys for number of {numOfGuest} guests from {rangeofDate}</p>
        <p className='text-xl font-bold'>Stays in {location}</p>
      
      <div className=' hidden lg:inline-flex space-x-2'>
        <p className='button'>Cancelation Flexibility</p>
        <p className='button'>Type of place</p>
        <p className='button'>Price</p>
        <p className='button'>Rooms and beds</p>
        <p className='button'>More filters</p>
      </div>
    </section>
   </main>
   <Footer/>
   </div>
  )
}

export default Search;