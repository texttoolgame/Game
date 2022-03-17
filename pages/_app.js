import '../styles/globals.css'
import HomePage from '../Components/HomePage'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <HomePage></HomePage>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
