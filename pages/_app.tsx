import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import AppContextProvider from '../context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
