import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

export default function GalleryPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState<'sketches' | 'painted' | 'animations'>('sketches')

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const tabs = ['sketches', 'painted', 'animations'] as const

  return (
    <>
      <Head>
        <title>dewOS v1.0 - gallery.exe</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 text-black font-pda text-base">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded">
            <h1 className="text-lg font-bold mb-3">gallery.exe</h1>

            {/* Tab Controls */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border border-black px-2 py-1 ${
                    activeTab === tab ? 'bg-black text-green-400' : 'bg-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image Grid Placeholder */}
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-black h-24 text-xs flex items-center justify-center bg-white text-gray-700">
                  {activeTab.toUpperCase()} #{i + 1}
                </div>
              ))}
            </div>
          </div>
        </main>
      ) : (
        // === 🖥️ DESKTOP CRT MODE ===
        <main className="min-h-screen bg-[#f4f1ec] flex items-center justify-center p-4">
          {/* CRT FX */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] opacity-70" />
          </div>

          <div className="w-full max-w-6xl border border-[#857c73] bg-[#f4ecdf] shadow-lg relative z-20"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - gallery.exe</span>
              <Link href="/" className="bg-[#c9c1b8] text-black px-2 border border-black">X</Link>
            </div>

            {/* Unified Nav */}
            <CrtNavBar current="Gallery" />

            {/* Tab Buttons */}
            <div className="px-4 py-2 space-x-2 border-b border-[#857c73]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 border border-black ${
                    activeTab === tab ? 'bg-black text-green-400' : 'bg-[#d7d2c9]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-black h-32 flex items-center justify-center text-gray-500 text-sm bg-white">
                  {activeTab.toUpperCase()} #{i + 1}
                </div>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  )
}
