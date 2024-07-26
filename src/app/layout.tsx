'use client'
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import Head from './head'
import '../styles/global.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

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
      <body>{children}</body>
    </html>
  )
}
