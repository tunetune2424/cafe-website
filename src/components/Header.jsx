import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(250,246,239,0.92)] backdrop-blur-sm border-b border-[rgba(193,96,58,0.15)]">
      <div className="max-w-[1100px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-sm text-[#2C1A0E] tracking-widest no-underline">
          やちむん喫茶 シーサー園
          <em className="block not-italic text-[10px] text-[#7A5C42] tracking-[0.2em]">
            YACHIMUN KISSA SHISA-EN
          </em>
        </Link>
        <nav>
          <ul className="list-none flex gap-8">
            {[
              { label: 'About',  to: '/#about'  },
              { label: 'Menu',   to: '/menu'    },
              { label: 'Gallery',to: '/#gallery'},
              { label: 'News',   to: '/#news'   },
              { label: 'Access', to: '/access'  },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-[11px] tracking-[0.25em] text-[#2C1A0E] no-underline uppercase hover:text-[#C1603A] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
