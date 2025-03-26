import { useEffect, useState } from 'react'

const BOOT_MESSAGES = [
  'Reticulating spines...',
  'Installing commission specs...',
  'Initializing floofy protocols...',
  'Applying emotes to tail wag index...',
  'Deploying fuzzy shaders...',
  'Sketch buffer warming...',
  'Extracting reference folder...',
  'Loading brush engine...',
  'Rendering snout curvature...',
  'Checking for overdue invoices...',
  'Booting comfy mode...',
  'Auto-saving questionable anatomy...',
  'Unlocking WIP directory...',
  'Syncing with dewCloud...',
  'Loading snark module...',
  'Enabling hypercute...',
  'Compiling caffeine shaders...'
]

export default function BootScreen({ onFinish }: { onFinish: () => void }) {
  const [messages, setMessages] = useState<string[]>([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const shuffled = BOOT_MESSAGES.sort(() => 0.5 - Math.random()).slice(0, 5)
    setMessages(shuffled)
  }, [])

  useEffect(() => {
    if (messages.length === 0) return

    if (current < messages.length) {
      const timer = setTimeout(() => setCurrent(c => c + 1), 600)
      return () => clearTimeout(timer)
    } else {
      const finish = setTimeout(() => onFinish(), 1200)
      return () => clearTimeout(finish)
    }
  }, [current, messages, onFinish])

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono text-sm p-8 flex flex-col justify-center items-start gap-2">
		<pre className="text-green-400 text-xs leading-snug mb-6 font-['Courier_New',monospace]">
{String.raw`
     █████                             ███████     █████████ 
    ░░███                            ███░░░░░███  ███░░░░░███
  ███████   ██████  █████ ███ █████ ███     ░░███░███    ░░░ 
 ███░░███  ███░░███░░███ ░███░░███ ░███      ░███░░█████████ 
░███ ░███ ░███████  ░███ ░███ ░███ ░███      ░███ ░░░░░░░░███
░███ ░███ ░███░░░   ░░███████████  ░░███     ███  ███    ░███
░░████████░░██████   ░░████░████    ░░░███████░  ░░█████████ 
 ░░░░░░░░  ░░░░░░     ░░░░ ░░░░       ░░░░░░░     ░░░░░░░░░  
                                              
               dewOS v1.0
`}
</pre>


      {messages.slice(0, current).map((msg, i) => (
        <div key={i}>↳ {msg}</div>
      ))}

      {current < messages.length && <div className="animate-pulse">▌</div>}
    </div>
  )
}
