import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PdaTopBar from '@/components/PdaTopBar'
import CrtNavBar from '@/components/CrtNavBar'

export default function TermsOfService() {
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
        <title>dewOS v1.0 - terms_of_service.txt</title>
      </Head>

      {isMobile ? (
        // === 📱 PDA MODE ===
        <main className="min-h-screen bg-gray-300 p-4 text-black font-pda text-[15px] tracking-wider">
          <PdaTopBar />

          <div className="border border-black bg-gray-100 p-4 rounded">
            <h1 className="text-lg font-bold mb-4">terms_of_service.txt</h1>

            <p><strong>🎥 Streaming Notice:</strong> All work is streamed (courtesy) at <a href="https://picarto.tv/Dewclawpaw" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Picarto</a>.</p>

            <hr className="border-black my-3" />

            <p><strong>📝 To start a commission, I need:</strong></p>
            <ul className="list-disc pl-5 mb-2">
              <li>Your idea</li>
              <li>Your reference(s)</li>
              <li>Your email (for invoicing)</li>
            </ul>
            <p>DM me on Discord: <strong>dewtheram</strong></p>

            <hr className="border-black my-3" />

            <p><strong>💵 Billing:</strong> $30/hr. Timer only runs while drawing. Invoices go out after sketch is done.</p>

            <p><strong>🚫 Refunds:</strong> {"No refunds once work starts. Payment is required upon completion."}</p>

            <hr className="border-black my-3" />

            <p><strong>🖼️ Ownership:</strong> {"You reserve the rights to your commission."}</p>
            <p><span className="text-red-600 font-bold">⚠️ {"No use in AI training or ML models allowed."}</span></p>

            <hr className="border-black my-3" />

            <p><strong className="text-red-700">❌ I will NOT draw:</strong></p>
            <ul className="list-disc pl-5 text-red-700">
              <li>Blood or violence</li>
              <li>Underage or NSFW minor content</li>
              <li>Gross/bodily function themes</li>
              <li>Torture, self-harm</li>
              <li>Illegal or hateful imagery</li>
            </ul>
          </div>
        </main>
      ) : (
        // === 🖥️ CRT MODE ===
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#f4f1ec]">
          {/* CRT FX */}
          <div className="absolute inset-0 z-0 bg-[length:16px_16px] bg-[repeating-conic-gradient(#d0d0d0_0deg_90deg,#e2e2e2_90deg_180deg)] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.04)_2px)] opacity-70" />
          </div>

          {/* Main Window */}
          <div className="relative z-20 w-full max-w-4xl border border-[#857c73] bg-[#f4ecdf] shadow-lg"
            style={{
              textShadow: '0 0 1px rgba(0, 0, 0, 0.15)',
              filter: 'contrast(1.02) brightness(1.01)',
            }}
          >
            {/* Title Bar */}
            <div className="bg-[#5d457d] text-white px-3 py-1 flex justify-between items-center text-sm font-bold">
              <span>dewOS v1.0 - terms_of_service.txt</span>
              <Link href="/" className="bg-[#c9c1b8] text-black px-2 border border-black">X</Link>
            </div>

            {/* Unified Desktop Nav */}
            <CrtNavBar current="TOS" />

            {/* Content */}
            <div className="p-6 font-sans text-sm text-gray-800 space-y-6">
              <div>
                <p><strong>Streaming Notice:</strong> {"All work is done on stream (as a courtesy to clients) via"} <a href="https://picarto.tv/Dewclawpaw" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Picarto</a>.</p>
              </div>

              <div>
                <p><strong>Commission Requirements:</strong> {"To start a commission, I need the following:"}</p>
                <ul className="list-disc pl-6">
                  <li>Your idea</li>
                  <li>Your reference(s)</li>
                  <li>Your email (for invoicing)</li>
                </ul>
                <p className="mt-2">{"You can DM me on Discord:"} <strong>dewtheram</strong></p>
              </div>

              <div>
                <p><strong>Billing Policy:</strong> {"I charge $30 USD/hour. The timer only runs while I'm actively drawing (idle/tabbed-out time is not counted). Invoices are sent immediately after the sketch is completed."}</p>
              </div>

              <div>
                <p><strong>Refund Policy:</strong> {"I do not accept refunds once work has begun. Final payment is required upon completion."}</p>
              </div>

              <div>
                <p><strong>Ownership & Usage:</strong> {"You reserve the rights to the artwork you commission from me. However, my art may not be used in any AI data training or machine learning model, under any circumstances."}</p>
              </div>

              <div>
                <p><strong>I Will NOT Draw:</strong></p>
                <ul className="list-disc pl-6 text-red-600">
                  <li>Blood or violence</li>
                  <li>Underage characters or NSFW involving minors</li>
                  <li>Gross or bodily function content</li>
                  <li>Torture or self-harm imagery</li>
                  <li>Anything illegal or hateful</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
