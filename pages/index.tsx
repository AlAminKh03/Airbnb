import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<p className='text-green-500 font-bold'>Hello Airbnb</p>
    </div>
  )
}
