import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SearchData from '../Components/SearchData'
import { SearchDataProps } from '../Interfaces/Interfaces'

interface SearchInputProps{
  searchInput:SearchDataProps[]
}

export const getServerSideProps:GetServerSideProps=async()=>{
 const searchUrl = await fetch('https://www.jsonkeeper.com/b/5NPS')
const searchData:SearchDataProps[] =await searchUrl.json()
console.log(searchData)
return {
  props: {
    searchInput:searchData
  }
}
}

const Search:React.FC<SearchInputProps>=({searchInput}):JSX.Element=> {
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
    <div>
      {searchInput?.map((data)=>{
        return(
        <SearchData
        key={data.img}
        data={data}
        />
        )
      })}
    </div>
   </main>
   <Footer/>
   </div>
  )
}

export default Search;