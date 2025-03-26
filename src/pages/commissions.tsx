import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

export default function Commissions() {
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
        <title>dewOS v1.0 - commissions.exe</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 text-black font-pda text-[15px] tracking-wider">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded">
            <h1 className="text-lg font-bold mb-4">commissions.exe</h1>

            <p><strong>Rate:</strong> $30 USD/hour</p>
            <p><strong>Avg Time:</strong> 1–1.5 hrs/character sketch</p>
            <p><strong>Billing:</strong> Timer only runs while drawing. Invoice after sketch.</p>

            <hr className="border-black my-3" />

            <p className="font-bold">What I Offer:</p>
            <ul className="list-disc pl-5 mb-3">
              <li>✏️ Sketches (Clean or rough)</li>
              <li>🎨 Color Flats</li>
              <li>🌆 Backgrounds (simple or scenic)</li>
              <li>🖌️ Painted-over Sketches (Rendered)</li>
              <li>🌀 Animations (Coming soon!)</li>
            </ul>

            <hr className="border-black my-3" />

            <p className="font-bold">Do’s:</p>
            <ul className="list-disc pl-5 mb-3">
              <li>Furry art (feral/anthro)</li>
              <li>Transformation, expressive poses</li>
              <li>Stylized, cute, or weird ideas</li>
            </ul>

            <p className="font-bold text-red-700">Don’ts:</p>
            <ul className="list-disc pl-5 text-red-700 mb-3">
              <li>No blood or violence</li>
              <li>No illegal or gross content</li>
              <li>No hateful themes</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              <Link href="/queue"><button className="border border-black px-3 py-1 w-full">View Queue</button></Link>
              <Link href="/contact"><button className="border border-black px-3 py-1 w-full">Contact</button></Link>
              <Link href="/tos"><button className="border border-black px-3 py-1 w-full">Terms of Service</button></Link>
            </div>

            <p className="text-xs mt-4 text-gray-800">
              All commissions follow dewOS protocol. Drawing time is sacred. 🐏
            </p>
          </div>
        </main>
      ) : (
        // === 🖥️ DESKTOP CRT MODE ===
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#f4f1ec]">
          {/* CRT Background Effects */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] opacity-70" />
          </div>

          {/* Main Window */}
          <div
            className="relative z-20 w-full max-w-3xl border border-[#857c73] bg-[#f4eee4] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title Bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - commissions.exe</span>
              <Link href="/" className="bg-[#c9c1b8] text-black px-2 border border-black">X</Link>
            </div>

            {/* Unified Nav */}
            <CrtNavBar current="Commissions" />

            {/* Content */}
            <div className="p-4 font-mono text-sm text-gray-800 space-y-4">
              <p><strong>Rate:</strong> $30 USD/hour</p>
              <p><strong>Average Time:</strong> 1–1.5 hours per character sketch</p>
              <p><strong>Billing:</strong> Timer only runs while I’m drawing (no idle time). Invoice sent after sketch is completed.</p>

              <hr className="border-gray-400" />

              <p><strong>What I Offer:</strong></p>
              <ul className="list-disc pl-6">
                <li>✏️ Sketches (Clean or rough)</li>
                <li>🎨 Color Flats</li>
                <li>🌆 Backgrounds (simple or scenic)</li>
                <li>🖌️ Painted-over Sketches (Rendering based on your preference)</li>
                <li>🌀 Animations (Coming soon!)</li>
              </ul>

              <hr className="border-gray-400" />

              <p><strong>Do’s:</strong></p>
              <ul className="list-disc pl-6">
                <li>Furry art (feral/anthro)</li>
                <li>Transformation, expressive poses</li>
                <li>Stylized, cute, or weird concepts</li>
              </ul>

              <p><strong className="text-red-700">Don’ts:</strong></p>
              <ul className="list-disc pl-6 text-red-700">
                <li>No blood or violence</li>
                <li>No illegal or gross content</li>
                <li>No hateful themes</li>
              </ul>

              <hr className="border-gray-400" />

              <div className="flex flex-wrap gap-3">
                <Link href="/queue" className="bg-[#c9c1b8] border border-black px-4 py-1">View Queue</Link>
                <Link href="/contact" className="bg-[#c9c1b8] border border-black px-4 py-1">Contact</Link>
                <Link href="/tos" className="bg-[#c9c1b8] border border-black px-4 py-1">Terms of Service</Link>
              </div>

              <p className="text-xs text-gray-600 mt-4">
                All commissions follow dewOS protocol. Drawing time is sacred. 🐏
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
