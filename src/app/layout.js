import { Poppins } from 'next/font/google'
import './globals.css'
import { connectDB } from '@/lib/db'
import { Toaster } from 'sonner'
import Image from 'next/image'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
})

export const metadata = {
  title: 'Next Note',
  description: 'A note taking app by next.js',
}

export default function RootLayout({ children }) {
  connectDB()

  return (
    <html lang='en'>
      <body className={`${poppins.variable}  antialiased`}>
        <Toaster position='top-center' />
        {children}
      </body>
    </html>
  )
}
