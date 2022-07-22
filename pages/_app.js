import '../styles/globals.css'
import DappProvider from '../components/DappProvider';

function MyApp({ Component, pageProps }) {
  return (
    <DappProvider>
      <Component {...pageProps} />
    </DappProvider>
  )
}

export default MyApp
