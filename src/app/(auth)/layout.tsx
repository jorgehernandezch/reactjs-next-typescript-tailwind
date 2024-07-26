import Image from 'next/image'
import backgroundImage from '@/assets/img/login/background.png'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative h-screen">
      <Image
        src={backgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="flex justify-center items-center z-10 h-full">
        {children}
      </div>
    </div>
  )
}
