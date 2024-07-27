'use client'

import { AuthScreen } from '@/components/AuthScreen'

export default function RootApp({ children }: { children: JSX.Element }) {
  return (
    <AuthScreen>
      <div className="bg-white rounded-lg h-full overflow-hidden">
        {children}
      </div>
    </AuthScreen>
  )
}
