import type { NextPage, } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Login from "./login"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SmartConnections</title>
        <meta name="SmartConnections dApp" content="Arweave social connections dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/TarekJ03/SmartConnections">SmartConnections!</a>
        </h1>

        <p className={styles.description}>
          <Link href="browse">Browse all connections</Link> or login via one of the methods below
        </p>

        <Login />
      </main> 
    </div>
  )
  

}


export default Home