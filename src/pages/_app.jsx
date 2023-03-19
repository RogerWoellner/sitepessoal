import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Index'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Roger | dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
