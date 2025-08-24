import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'

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
  return (
    <html lang='en'>
      <body className={`${poppins.variable}  antialiased`}>{children}</body>
    </html>
  )
}
