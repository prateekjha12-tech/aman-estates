import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-2xl md:text-3xl font-bold tracking-[4px] gold-text"
          >
            Aman Estates
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">

            <Link
  to="/"
  onClick={() => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }}
  className="hover:text-[#c8a96b] transition"
>
  Home
</Link>

            <Link
              to="/properties"
              className="hover:text-[#c8a96b] transition"
            >
              Properties
            </Link>

            <Link
              to="/about"
              className="hover:text-[#c8a96b] transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#c8a96b] transition"
            >
              Contact
            </Link>
            
            <Link to="/saved">Saved</Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-[#111111] border-t border-white/10">

          <div className="flex flex-col px-6 py-8 gap-6 text-lg uppercase tracking-wider">

            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false)
                handleLogoClick()
              }}
              className="hover:text-[#c8a96b] transition"
            >
              Home
            </Link>

            <Link
              to="/properties"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#c8a96b] transition"
            >
              Properties
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#c8a96b] transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#c8a96b] transition"
            >
              Contact
            </Link>

          </div>

        </div>

      )}

    </nav>
  )
}