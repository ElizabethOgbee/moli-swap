import { Inter } from 'next/font/google'
import LandingPage from './Components/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LandingPage />
  )
}
