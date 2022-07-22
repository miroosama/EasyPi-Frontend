import '../styles/globals.css'
import DappProvider from '../containers/DappProvider';

function MyApp({ Component, pageProps }) {
  return (
    <DappProvider>
      <Component {...pageProps} />
    </DappProvider>
  )
}

export default MyApp
