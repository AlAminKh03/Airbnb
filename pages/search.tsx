import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

type Props = {}

const Search=({}: Props)=> {
  return (
   <div>
    <Header/>
   <main>
    <section className='pt-12 pl-6 pb-4 space-y-3'>

        <p className='text-xs font-semibold'>300+ satys for number of 5 guests</p>
        <p className='text-xl font-bold'>Stays in USA</p>
      
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