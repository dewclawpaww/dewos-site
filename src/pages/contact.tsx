// pages/contact.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>dewOS v1.0 - contact.txt</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 text-black font-pda text-[15px] tracking-wider">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded">
            <h1 className="text-lg font-bold mb-4">contact.txt</h1>

            <p className="mb-2">You can reach me through any of the following platforms:</p>

            <ul className="space-y-1 text-sm">
              <li>
                <span className="font-bold">📧 Email:</span>{' '}
                <a href="mailto:dewclawpaw@gmail.com" className="text-blue-700 underline">dewclawpaw@gmail.com</a>
              </li>
              <li>
                <span className="font-bold">💬 Discord:</span> <code>dewtheram</code>
              </li>
              <li>
                <span className="font-bold">🌐 Fur Affinity:</span>{' '}
                <a href="https://www.furaffinity.net/user/dewclawpaw" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  furaffinity.net/user/dewclawpaw
                </a>
              </li>
              <li>
                <span className="font-bold">🐦 X (Twitter):</span>{' '}
                <a href="https://x.com/dewAnimation" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  x.com/dewAnimation
                </a>
              </li>
              <li>
                <span className="font-bold">📺 Picarto:</span>{' '}
                <a href="https://picarto.tv/Dewclawpaw" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  picarto.tv/Dewclawpaw
                </a>
              </li>
              <li>
                <span className="font-bold">💻 Discord Server:</span>{' '}
                <a href="https://discord.gg/YpueWrewzS" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  Join My Server
                </a>
              </li>
            </ul>

            <p className="text-xs text-gray-600 pt-4">All official dewOS transmission lines secure. 🚪</p>
          </div>
        </main>
      ) : (
        // === 🖥️ DESKTOP CRT MODE ===
        <main className="min-h-screen bg-[#f4f1ec] relative overflow-hidden flex items-center justify-center p-4">
          {/* Checkerboard Overlay */}
          <div className="absolute inset-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none z-0" />

          <div className="relative z-10 w-full max-w-2xl border border-[#857c73] bg-[#e8e0d4] shadow-lg font-mono text-sm">
            {/* Title bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center font-bold text-sm">
              <span>dewOS v1.0 - contact.txt</span>
              <Link href="/">
                <button className="bg-[#c9c1b8] text-black px-2 border border-black">X</button>
              </Link>
            </div>

            {/* Shared CRT nav */}
            <CrtNavBar current="Contact" />

            {/* Content */}
            <div className="p-6 space-y-4 text-gray-800">
              <p>You can reach me through any of the following platforms:</p>

              <ul className="space-y-2">
                <li>
                  <span className="font-bold">📧 Email:</span>{' '}
                  <a href="mailto:dewclawpaw@gmail.com" className="text-blue-700 underline">dewclawpaw@gmail.com</a>
                </li>
                <li><span className="font-bold">💬 Discord:</span> <code>dewtheram</code></li>
                <li>
                  <span className="font-bold">🌐 Fur Affinity:</span>{' '}
                  <a href="https://www.furaffinity.net/user/dewclawpaw" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                    furaffinity.net/user/dewclawpaw
                  </a>
                </li>
                <li>
                  <span className="font-bold">🐦 X (Twitter):</span>{' '}
                  <a href="https://x.com/dewAnimation" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                    x.com/dewAnimation
                  </a>
                </li>
                <li>
                  <span className="font-bold">📺 Picarto:</span>{' '}
                  <a href="https://picarto.tv/Dewclawpaw" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                    picarto.tv/Dewclawpaw
                  </a>
                </li>
                <li>
                  <span className="font-bold">💻 Discord Server:</span>{' '}
                  <a href="https://discord.gg/YpueWrewzS" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                    Join My Server
                  </a>
                </li>
              </ul>

              <p className="text-xs text-gray-600 pt-4">All official dewOS transmission lines secure. 🚪</p>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
