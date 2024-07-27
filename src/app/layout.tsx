'use client'
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import Head from './head'
import '../styles/global.css'
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Ajusta los pesos según necesites
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Ajusta los pesos según necesites
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Solo ejecuta en el cliente
      initFlowbite()
    }
  }, [])
  return (
    <html lang="pt-BR">
      <Head />
      <body className={`${montserrat.className}${openSans.className}`}>
        {children}
      </body>
    </html>
  )
}
