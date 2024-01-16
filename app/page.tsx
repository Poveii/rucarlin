import Image from 'next/image'

import logo from './assets/logo.jpg'
import youtubeLogo from './assets/youtubeLogo.svg'
import tiktokLogo from './assets/tiktokLogo.svg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={logo} alt="" className="w-64 h-64 mb-1 rounded-3xl" />
      <h1 className="text-3xl mb-2">Site em construção!</h1>

      <div className="flex items-center gap-2">
        <Image src={youtubeLogo} alt="" />
        <a
          href="https://www.youtube.com/@rucarlinroblox"
          className="font-semibold underline"
        >
          Canal no Youtube
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Image src={tiktokLogo} alt="" className="w-6" />
        <a
          href="https://www.tiktok.com/@rucarlin/"
          className="font-semibold underline"
        >
          Perfil no Tiktok
        </a>
      </div>
    </div>
  )
}
