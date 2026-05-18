import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'About',   href: '/#about'   },
  { label: 'Menu',    href: '/#menu'    },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'News',    href: '/#news'    },
  { label: 'Access',  href: '/#access'  },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(250,246,239,0.92)] backdrop-blur-sm border-b border-[rgba(193,96,58,0.15)]">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-serif text-sm text-[#2C1A0E] tracking-widest no-underline">
          縁側喫茶 むすび庵
          <em className="block not-italic text-[10px] text-[#7A5C42] tracking-[0.2em]">
            ENGAWA KISSA MUSUBI-AN
          </em>
        </a>

        {/* PC ナビ */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="list-none flex gap-8">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[11px] tracking-[0.25em] text-[#2C1A0E] no-underline uppercase hover:text-[#C1603A] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/reservation"
            className="text-[11px] tracking-[0.2em] px-4 py-2 border border-[#C1603A] text-[#C1603A] no-underline uppercase hover:bg-[#C1603A] hover:text-[#FAF6EF] transition-colors"
          >
            予約
          </Link>
        </nav>

        {/* ハンバーガーボタン（モバイルのみ） */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-px bg-[#2C1A0E] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#2C1A0E] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#2C1A0E] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <nav className="md:hidden bg-[rgba(250,246,239,0.97)] border-t border-[rgba(193,96,58,0.15)] px-6 py-6">
          <ul className="list-none flex flex-col gap-5">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-[12px] tracking-[0.3em] text-[#2C1A0E] no-underline uppercase"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/reservation"
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.3em] text-[#C1603A] no-underline uppercase"
              >
                予約
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
