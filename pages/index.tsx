import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Another from '../Components/Another'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
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
      data:data
    }
  }
}


const Home=({data}:{data :PropsModel[]})=> {
  console.log(data)
  return (
    <div >
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* <Another/> */}
      <Banner/>
     <main className='max-w-7xl h-screen px-8 sm:px-16 mx-auto'>
     <section className='pt-6'>
          <p className='text-4xl font-semibold pb-5'>Explore Nearby</p>
          {data.map(list=>{
            return(
              <div key={list.img}>
                <h1>{list.distance}</h1>
              </div>
            )
          })}
        </section>
     </main>

    </div>
  )
}


export default Home