import Image from 'next/image'

import logo from './assets/logo.jpg'
import youtubeLogo from './assets/youtubeLogo.svg'
import tiktokLogo from './assets/tiktokLogo.svg'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image src={logo} alt="" className="mb-1 h-64 w-64 rounded-3xl" />
      <h1 className="mb-2 text-3xl">Site em construção!</h1>

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
