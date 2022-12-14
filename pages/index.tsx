import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import MediumCards from '../Components/MediumCards'
import SmallerCards from '../Components/SmallerCards'
import { PropsModel } from '../Interfaces/Interfaces'
import { PropsForMediumCard } from '../Interfaces/Interfaces'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'

interface HomeProps{
  exploredData:PropsModel[]
  mediumCardData:PropsForMediumCard[]
}



export const getStaticProps:GetStaticProps=async()=>{
  const response= await fetch('https://www.jsonkeeper.com/b/4G1G')
  const data :PropsModel[]= await response.json()
 

  const responseForMediumCard = await fetch('https://www.jsonkeeper.com/b/VHHT')
  const dataForMediumCard : PropsForMediumCard[]= await responseForMediumCard.json()
 
  if(!data){
    return {
     notFound: true
    }
  }

  return{
    props:{
      exploredData:data,
      mediumCardData: dataForMediumCard
    }
  }
}


  const Home:React.FC<HomeProps>=({exploredData,mediumCardData}):JSX.Element=> {
    return (
    <div >
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder=''/>
     
      <Banner/>
     <main className='max-w-7xl mx-auto px-8 sm:px-16 sm:ml-14'>
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
        <section className='pt-6 mt-6'>
          <p className='text-4xl font-semibold pb-5'>Live Anywhere</p>
           <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
           {mediumCardData?.map(mediumData=>{
             
              return(
                <MediumCards 
                key={mediumData.img}
                mediumData={mediumData}
                />
              )
            })}
           </div>
        </section>
        <LargeCard/>
     </main>
    <Footer/>
    </div>
  )
}


export default Home