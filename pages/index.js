import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { walletlink } from '../lib/connectors';
import { useEthers } from '@usedapp/core';

export default function Home() {
  const { account, activateBrowserWallet } = useEthers();

//   const tryToActivate = () => {
//     @TODO: add walletconnect logic
//     activateBrowserWallet();
// };
  return (
    <div className={styles.container}>
      <Head>
        <title>EasyPi</title>
        <meta name="EasyPi" content="the home of stablecoin decentralized, substainable high yield." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={activateBrowserWallet}>
          connect
        </button>
        <p>Account: {account}</p>
      </main>

      <footer className={styles.footer}>
        copyright
      </footer>
    </div>
  )
}
