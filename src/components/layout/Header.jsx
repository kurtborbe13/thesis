import { useState } from 'react'
import arcoseLogo from "../../assets/images/arcose-logo-croppedd.png";

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#ECEBE7] bg-[#F8F7F3]/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          className="flex items-center gap-3 text-[#181818]"
          href="#home"
          onClick={closeMenu}
        >
          <img
  className="h-10 w-auto object-contain"
  src={arcoseLogo}
  alt="Arcose Construction Services"
 />

          <span className="text-lg font-bold tracking-[0.12em] uppercase">
            Arcose
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              className="text-sm font-semibold text-[#242424] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#8F1823]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="inline-flex size-10 items-center justify-center text-[#181818] md:hidden"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#ECEBE7] bg-[#F8F7F3] px-5 transition-all duration-200 ease-out md:hidden ${
          isMenuOpen
            ? 'max-h-80 py-5 opacity-100'
            : 'pointer-events-none max-h-0 py-0 opacity-0'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="px-3 py-3 text-sm font-semibold text-[#242424] transition-colors duration-200 hover:bg-[#F3E5E7] hover:text-[#8F1823]"
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header