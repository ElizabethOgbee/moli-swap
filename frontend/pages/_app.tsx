import '@/styles/globals.css'
import Navbar from './Components/Navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Navbar />
    <Component {...pageProps} />

    </>
)
}

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }