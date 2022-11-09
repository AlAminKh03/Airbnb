import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import SmallerCards from '../Components/SmallerCards'
import { PropsModel } from '../Interfaces/Interfaces'



export const getStaticProps:GetStaticProps=async()=>{
  const response= await fetch('https://www.jsonkeeper.com/b/4G1G')
  const data :PropsModel[]= await response.json()
  if(!data){
    return {
     notFound: true
    }
  }

  return{
    props:{
      exploredData:data
    }
  }
}


const Home=({exploredData}:{ exploredData:PropsModel[]})=> {
  // console.log(data)
  return (
    <div >
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
     
      <Banner/>
     <main className='max-w-8xl h-screen px-8 sm:px-16 mx-auto ml-32'>
     <section className='pt-6'>
          <p className='text-4xl font-semibold pb-5'>Explore Nearby</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {exploredData.map(list=>{
            return(
              <SmallerCards
              key={list.img}
              lists={list}
              />
            )
          })}
         </div>
        </section>
        <section>
          
        </section>
     </main>

    </div>
  )
}


export default Home