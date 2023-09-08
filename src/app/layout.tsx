import '../styles/global.css'
import Head from './head'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  )
}
