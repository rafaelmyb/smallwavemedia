import { Header } from '../components/Header';

import GlobalStyle from '../styles/global.js';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
