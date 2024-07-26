import Image from 'next/image'
export const Footer = () => {
  return (
    <div className="w-full bg-white h-20 max-h-20 min-h-20 overflow-hidden p-4 flex justify-start items-center gap-3">
      <Image
        src={require('@/assets/img/footer/logotipo.png')}
        alt="Logotipo"
        className="w-auto h-8 md:h-10"
      />
      <p className="font-sf-pro font-bold text-blue-800 text-sm mb-0">
        VERSÃO 1.0/2024
      </p>
    </div>
  )
}
