import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

interface QueueData {
  slots: string[]
  status: string
}

export default function Queue() {
  const [isMobile, setIsMobile] = useState(false)
  const [queueData, setQueueData] = useState<QueueData>({ slots: [], status: 'Loading...' })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    fetch('/queue.json')
      .then((res) => res.json())
      .then((data) => setQueueData(data))
      .catch(() =>
        setQueueData({
          slots: ['Error loading data'],
          status: 'Unavailable',
        })
      )
  }, [])

  const renderQueueLines = () =>
    queueData.slots.map((slot, i) => (
      <p key={i} className="text-gray-400">
        &gt; <span className="text-green-500">[{String(i + 1).padStart(2, '0')}]</span> — {slot}
      </p>
    ))

  return (
    <>
      <Head>
        <title>dewOS - queue.txt</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 text-black font-pda text-[15px] tracking-wider">
          <PdaTopBar />

          <div className="border border-black bg-black p-4 rounded font-mono text-green-400">
            <p className="mb-2">
              <span className="text-green-500">dewOS v1.0 &gt;</span>{' '}
              <span className="text-green-300">queue.txt</span>
            </p>

            {renderQueueLines()}

            <p className="mt-4">
              <span className="text-white">Status:</span>{' '}
              <span className="text-cyan-300">{queueData.status}</span>
            </p>

            <div className="mt-4 animate-pulse text-green-500 text-xl">▮</div>
          </div>
        </main>
      ) : (
        // === 🖥️ DESKTOP CRT MODE ===
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#f4f1ec] animate-flicker">
          {/* CRT FX */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] opacity-70" />
          </div>

          {/* Terminal Window */}
          <div
            className="relative z-20 w-full max-w-2xl border border-[#857c73] bg-[#e8e0d4] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title Bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - queue.txt</span>
              <Link href="/" className="bg-[#c9c1b8] text-black px-2 border border-black">X</Link>
            </div>

            {/* Navigation */}
            <CrtNavBar current="Queue" />

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm text-green-400 bg-black min-h-[300px]">
              <p className="mb-2">
                <span className="text-green-500">dewOS v1.0 &gt;</span>{' '}
                <span className="text-green-300">queue.txt</span>
              </p>

              {renderQueueLines()}

              <p className="mt-4">
                <span className="text-white">Status:</span>{' '}
                <span className="text-cyan-300">{queueData.status}</span>
              </p>

              <div className="mt-4 animate-pulse text-green-500 text-xl">▮</div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
