import { useState } from 'react'
    import Link from 'next/link'
    
    export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false)
    
      const toggleMenu = () => setIsOpen(!isOpen)
    
      return (
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo and Branding */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10"
                    src="/logo.svg"
                    alt="Chartonomics Logo"
                  />
                </div>
                <Link href="/" className="text-2xl font-bold text-primary">
                  Chartonomics
                </Link>
              </div>
    
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/services" className="nav-link">Services</Link>
                <Link href="/portfolio" className="nav-link">Portfolio</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
                <button className="btn-primary">Get Started</button>
              </div>
    
              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
                  aria-label="Main menu"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeJoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" className="nav-link block">Home</Link>
                <Link href="/about" className="nav-link block">About</Link>
                <Link href="/services" className="nav-link block">Services</Link>
                <Link href="/portfolio" className="nav-link block">Portfolio</Link>
                <Link href="/contact" className="nav-link block">Contact</Link>
                <button className="btn-primary w-full mt-4">Get Started</button>
              </div>
            </div>
          )}
        </nav>
      )
    }
