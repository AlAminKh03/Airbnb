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

interface HomeProps{
  exploredData:PropsModel[]
  mediumCardData:PropsForMediumCard[]
}



export const getStaticProps:GetStaticProps=async()=>{
  const response= await fetch('https://www.jsonkeeper.com/b/4G1G')
  const data :PropsModel[]= await response.json()
  // console.log( data);

  const responseForMediumCard = await fetch('https://www.jsonkeeper.com/b/VHHT')
  const dataForMediumCard : PropsForMediumCard[]= await responseForMediumCard.json()
  console.log(dataForMediumCard);
  if(!data){
    return {
     notFound: true
    }
  }
  console.log(dataForMediumCard);

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

      <Header/>
     
      <Banner/>
     <main className='max-w-8xl h-screen px-8 sm:px-16 mx-auto ml-32'>
        <section className='pt-6 mt-6'>
          <p className='text-4xl font-semibold pb-5'>Explore Nearby</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {exploredData.map(list=>{
          // console.log(list)
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
              console.log(mediumData.img)
              return(
                <MediumCards 
                key={mediumData.img}
                mediumData={mediumData}
                />
              )
            })}
           </div>
        </section>
     </main>

    </div>
  )
}


export default Home