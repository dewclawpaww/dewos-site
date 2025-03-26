import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

export default function CoffeeBreak() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>dewOS v1.0 - coffeebreak.exe</title>
      </Head>

      {isMobile ? (
        // === MOBILE / PDA MODE
        <main className="min-h-screen bg-gray-300 p-4 font-pda text-base text-black">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded">
            <h1 className="text-lg font-bold mb-4">coffeebreak.exe</h1>
            <div className="w-full h-[400px] border border-black">
              <iframe
                src="/coffee-pong.html"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
            <p className="text-xs mt-4 text-gray-700">
              A relaxing game of pong while you sip coffee ☕
            </p>
          </div>
        </main>
      ) : (
        // === DESKTOP CRT MODE
        <main className="min-h-screen bg-[#f4f1ec] relative overflow-hidden flex items-center justify-center p-4">
          {/* CRT background */}
          <div className="absolute inset-0 bg-[length:16px_16px] 
                          bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] 
                          opacity-20 pointer-events-none z-0" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full 
                            bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] 
                            opacity-70" />
          </div>

          <div
            className="relative z-20 w-full max-w-4xl border border-[#857c73] bg-[#f4ecdf] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            <div className="bg-[#5d457d] text-white px-3 py-1 
                            flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - coffeebreak.exe</span>
              <Link href="/" className="bg-[#c9c1b8] text-black px-2 border border-black">
                X
              </Link>
            </div>

            <CrtNavBar current="CoffeeBreak" />

            <div className="p-4 flex flex-col items-center">
              {/* Let the game fill the entire CRT interior */}
              <div className="w-full h-[600px] border border-black">
                <iframe
                  src="/coffee-pong.html"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              <p className="text-xs mt-4 text-gray-700 font-mono">
                Play a retro pong game while you wait ☕
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
