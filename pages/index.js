import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar, Footer } from '../components'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>lorem ipsum dolor sit amet, consectetur</p>
        <p className={styles.text}>lorem ipsum dolor sit amet, consectetur</p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
