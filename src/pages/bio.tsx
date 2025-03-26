import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

export default function BioPage() {
  const [showCursor, setShowCursor] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>bio.txt - dewOS</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 text-black font-pda text-[15px] tracking-wider">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded">
            <h1 className="text-lg font-bold mb-4">bio.txt</h1>

            <div className="flex justify-center mb-4">
              <Image
                src="/DewBio.png"
                alt="Dew Profile Pic"
                width={220}
                height={220}
                className="border border-black"
              />
            </div>

            <pre className="text-[11px] leading-tight font-[Tahoma,_sans-serif] whitespace-pre-wrap">
{`User: Dew (aka dewclawpaw)
Species: Sheep/Ram
Role: Furry Artist / Animator / Rigging Goblin
Location: Probably somewhere surrounded by wires and coffee

Known For:
• Drawing weird little guys (professionally)
• Transformation animations and expressive characters
• Technical know-how + strong opinions on workflow
• Building everything from scratch… out of spite

Tools of the Trade:
• Paint Tool SAI, Clip Studio Paint
• Autodesk Maya, Blender
• C++ plugin development
• A suspicious number of folders named “WIP”

System Notes:
• Memory Usage: 81% caffeination
• Art Style: Bouncy, stylized, occasionally cursed
• Likes: CRT glow, synthwave, things with ears
• Dislikes: Burnout, vague feedback, Windows Update

Fun Fact:
Will absolutely rig an entire model just to animate 3 frames of tail fluff.

"dewOS is fully operational."${showCursor ? ' █' : '  '}`}
            </pre>
          </div>
        </main>
      ) : (
        // === 🖥️ DESKTOP CRT MODE ===
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#f4f1ec] animate-flicker">
          {/* CRT Background */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] opacity-70" />
          </div>

          {/* CRT Window */}
          <div
            className="relative z-20 w-full max-w-4xl border border-[#857c73] bg-[#e8e0d4] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title Bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - bio.txt</span>
              <Link href="/">
                <button className="bg-[#c9c1b8] text-black px-2 border border-black hover:brightness-105 hover:scale-[1.03] active:brightness-90 active:translate-x-[1px] active:translate-y-[1px] transition-all duration-100">
                  X
                </button>
              </Link>
            </div>

            {/* Unified Nav Bar */}
            <CrtNavBar />

            {/* Content */}
            <div className="p-4 font-mono text-sm text-gray-800 flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/DewBio.png"
                  alt="Dew Profile Pic"
                  width={250}
                  height={250}
                  className="border border-black"
                />
              </div>

              <div className="whitespace-pre-wrap leading-relaxed">
{`User: Dew (aka dewclawpaw)
Species: Sheep/Ram
Role: Furry Artist / Animator / Rigging Goblin
Location: Probably somewhere surrounded by wires and coffee

Known For:
• Drawing weird little guys (professionally)
• Transformation animations and expressive characters
• Technical know-how + strong opinions on workflow
• Building everything from scratch… out of spite

Tools of the Trade:
• Paint Tool SAI, Clip Studio Paint
• Autodesk Maya, Blender
• C++ plugin development
• A suspicious number of folders named “WIP”

System Notes:
• Memory Usage: 81% caffeination
• Art Style: Bouncy, stylized, occasionally cursed
• Likes: CRT glow, synthwave, things with ears
• Dislikes: Burnout, vague feedback, Windows Update

Fun Fact:
Will absolutely rig an entire model just to animate 3 frames of tail fluff.

"dewOS is fully operational."${showCursor ? ' █' : '  '}`}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
