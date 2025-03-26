import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import PdaTopBar from '@/components/PdaTopBar'
import Link from 'next/link'

export default function RunPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [audioStarted, setAudioStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const startAudio = () => {
    if (!audioStarted && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.warn('Autoplay blocked – waiting for user interaction.')
      })
      setAudioStarted(true)
    }
  }

  return (
    <>
      <Head>
        <title>dewOS v1.0 - foxspin.exe</title>
      </Head>

      <audio ref={audioRef} src="/FoxPhunk.mp3" loop />

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main
          onClick={startAudio}
          className="min-h-screen bg-gray-300 p-4 text-black font-pda text-[15px] tracking-wider"
        >
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded text-center">
            <h1 className="text-lg font-bold mb-4">foxspin.exe</h1>
            <Image
              src="/SpinningFox.gif"
              alt="Spinning Fox"
              width={320}
              height={266}
              className="border border-black mx-auto"
            />
            {!audioStarted && (
              <button className="mt-4 border border-black px-4 py-1 bg-white w-full">▶ Start Music</button>
            )}
          </div>
        </main>
      ) : (
        // === 🖥️ CRT DESKTOP MODE ===
        <main
          onClick={startAudio}
          className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#f4f1ec] animate-flicker"
        >
          {/* CRT background FX */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#222_0deg_90deg,#111_90deg_180deg)] opacity-10 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,255,0,0.05)_2px)] opacity-50" />
          </div>

          {/* CRT Window */}
          <div
            className="relative z-20 w-full max-w-3xl border border-[#857c73] bg-[#e8e0d4] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title Bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - foxspin.exe</span>
              <Link href="/" className="bg-[#c9c1b8] text-black px-2 border border-black">X</Link>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col items-center justify-center font-mono text-sm text-gray-800">
              <Image
                src="/SpinningFox.gif"
                alt="Spinning Fox"
                width={704}
                height={586}
                className="border border-black"
              />
              {!audioStarted && (
                <button className="mt-6 border border-black bg-[#c9c1b8] px-4 py-1 hover:brightness-105 active:translate-x-[1px] active:translate-y-[1px]">
                  ▶ Start Music
                </button>
              )}
              <p className="text-xs text-gray-500 mt-4">Running foxspin.exe with funky audio buffer…</p>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
