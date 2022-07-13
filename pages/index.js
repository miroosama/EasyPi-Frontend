import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EasyPi</title>
        <meta name="EasyPi" content="the home of stablecoin decentralized, substainable high yield." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Easy Pi Earn
      </main>

      <footer className={styles.footer}>
        copyright
      </footer>
    </div>
  )
}
