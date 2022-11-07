import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header/>
<Banner/>
    </div>
  )
}
