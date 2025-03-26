// src/components/CrtNavBar.tsx
import Link from 'next/link'

type CrtNavBarProps = {
  current?: string
}

export default function CrtNavBar({ current }: CrtNavBarProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/commissions', label: 'Commissions' },
    { href: '/queue', label: 'Queue' },
    { href: '/tos', label: 'TOS' },
    { href: '/contact', label: 'Contact' },
    { href: '/bio', label: 'Bio' },
  ]

  return (
    <div className="bg-[#d4cec4] text-black px-3 py-1 flex space-x-4 border-b border-[#857c73] text-sm">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`
            hover:underline
            ${current === label ? 'text-gray-500 pointer-events-none' : ''}
          `}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
