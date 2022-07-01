import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles/theme/default';
import GlobalStyle from '../styles/global.js';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
