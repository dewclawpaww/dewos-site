// src/components/PdaTopBar.tsx
export default function PdaTopBar() {
  return (
    <div className="flex justify-between items-center px-2 text-xs mb-2 font-bold tracking-widest font-mono">
      <span>dewOS PDA v1.0</span>
      <span className="flex items-center gap-1">
        | BAT:
        <span className="inline-block w-10 h-3 bg-black relative overflow-hidden">
          <span className="absolute inset-y-0 left-0 w-3/4 animate-pulse bg-green-400" />
        </span>
      </span>
    </div>
  )
}
