import { Header } from '../src/components/Header/index'
import '../src/styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
  <Component {...pageProps} />
  </>)

}

export default MyApp
