import Image from 'next/image'
import backgroundImage from '@/assets/img/login/background-form.png'

export default function SignIn() {
  return (
    <div className="relative z-20 w-10/12 h-[calc(100vh-15%)] rounded-xl overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10 object-center"
      />
    </div>
  )
}
