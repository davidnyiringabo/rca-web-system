import '../styles/globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from '@/src/components/Navbar/Navbar'
import Footer from '@/src/components/Footer/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: '400'
  }
)

export const metadata: Metadata = {
  title: 'Rwanda Coding Academy',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png'/>
      </head>
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
