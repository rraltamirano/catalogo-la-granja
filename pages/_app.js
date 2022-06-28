import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
