'use client'

import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

interface AuthScreenProps {
  children: JSX.Element
}

export const AuthScreen = ({ children }: AuthScreenProps) => {
  return (
    <div className="">
      <Sidebar />
      <div className="bg-slate-500 flex-1 flex flex-col justify-between h-[calc(100vh-3.5rem)] md:h-screen md:ml-64">
        <div className="w-full flex-1 bg-gray-300 p-6">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
