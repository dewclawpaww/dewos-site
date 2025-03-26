import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BootScreen from '@/components/BootScreen'
import PdaTopBar from '@/components/PdaTopBar'

export default function Home() {
  const [booted, setBooted] = useState(false)
  const [shouldBoot, setShouldBoot] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const hasBooted = sessionStorage.getItem('dewOS-booted')
    if (hasBooted) {
      const bootChance = Math.random() < 1 / 3
      setShouldBoot(bootChance)
      if (!bootChance) setBooted(true)
    } else {
      sessionStorage.setItem('dewOS-booted', 'true')
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!booted && shouldBoot) {
    return <BootScreen onFinish={() => setBooted(true)} />
  }

  return (
    <>
      <Head>
        <title>dewOS</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 font-pda text-base text-black">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded shadow-sm">
            <h1 className="font-bold mb-4 text-xl">dewclawpaw’s art terminal</h1>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <Link href="/gallery"><button className="border border-black p-2 w-full">Gallery</button></Link>
              <Link href="/commissions"><button className="border border-black p-2 w-full">Commissions</button></Link>
              <Link href="/queue"><button className="border border-black p-2 w-full">Queue</button></Link>
              <Link href="/tos"><button className="border border-black p-2 w-full">TOS</button></Link>
              <Link href="/contact"><button className="border border-black p-2 w-full">Contact</button></Link>
              <Link href="/bio"><button className="border border-black p-2 w-full">bio.txt</button></Link>
              <Link href="/run"><button className="border border-black p-2 w-full col-span-2">Run</button></Link>
              <Link href="/coffeebreak"><button className="border border-black p-2 w-full col-span-2">☕ Coffee Break</button></Link>
            </div>

            <p className="text-xs text-left text-blue-900">
              dewOS PDA interface <span className="text-green-600">online</span>{' '}
              <span className="inline-block w-4 h-3 bg-green-200 border border-black ml-1" />
            </p>
          </div>
        </main>
      ) : (
        // === 🖥️ DESKTOP CRT MODE ===
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#f4f1ec] animate-flicker">
          {/* CRT checkerboard + scanlines */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] opacity-70" />
          </div>

          {/* CRT Main Window */}
          <div
            className="relative z-20 w-full max-w-3xl border border-[#857c73] bg-[#e8e0d4] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0</span>
              <button
                onClick={() => window.location.href = 'https://www.google.com'}
                className="bg-[#c9c1b8] text-black px-2 border border-black hover:brightness-105 active:brightness-90 active:translate-x-[1px] active:translate-y-[1px] transition-all duration-100"
              >
                X
              </button>
            </div>

            {/* Main content */}
            <div className="p-4 font-mono text-sm space-y-4 text-gray-800">
              <p>
                The personal art site of <strong>dewclawpaw</strong>.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/gallery"><button className="crt-btn">Gallery</button></Link>
                <Link href="/commissions"><button className="crt-btn">Commissions</button></Link>
                <Link href="/queue"><button className="crt-btn">Queue</button></Link>
                <Link href="/tos"><button className="crt-btn">TOS</button></Link>
                <Link href="/contact"><button className="crt-btn">Contact</button></Link>
                <Link href="/bio"><button className="crt-btn">bio.txt</button></Link>
                <Link href="/run"><button className="crt-btn">Run</button></Link>
                <Link href="/coffeebreak"><button title="Coffee Break" className="crt-btn">☕</button></Link>
              </div>

              <p className="text-xs text-gray-600">
                This site is best viewed on a CRT monitor running dewOS v1.0 😎
              </p>
            </div>
          </div>
        </main>
      )}

      {/* Desktop button styles */}
      <style jsx>{`
        .crt-btn {
          background: #c9c1b8;
          border: 1px solid black;
          padding: 0.25rem 1rem;
          font-size: 0.875rem;
          transition: all 0.1s ease;
        }

        .crt-btn:hover {
          filter: brightness(1.05);
        }

        .crt-btn:active {
          filter: brightness(0.95);
          transform: translate(1px, 1px);
        }
      `}</style>
    </>
  )
}
