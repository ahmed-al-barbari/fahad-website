import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isLanding = location.pathname === '/'

  const navLinks = [
    { label: 'الصفحة الرئيسية', href: '/home' },
    { label: 'الموثق والمسجل العقاري', href: '/services' },
    { label: 'مسجل عقاري معتمد', href: '/registrar' },
    { label: 'المقالات', href: '/articles' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  if (isLanding) return null

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-[rgba(26,42,58,0.1)] shadow-lg'
            : 'bg-[#1A2A3A] border-b border-[rgba(255,255,255,0.06)]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* ===== الشعار مع الصورة (مكبر وحركة) ===== */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <img 
                src="/logo_fahed.jpg" 
                alt="شعار فهد العتيبي" 
                className="h-14 w-auto rounded-full object-contain border-2 border-[#D4A373]/30 shadow-md group-hover:shadow-[#D4A373]/40 transition-all duration-300
                  animate-[spin_8s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite] group-hover:scale-105"
                style={{ animation: 'spin 8s linear infinite' }}
              />
            </div>
            <span className={`text-xl sm:text-2xl font-extrabold tracking-tight whitespace-nowrap transition-colors duration-300 ${
              scrolled ? 'text-[#1A2A3A]' : 'text-white'
            }`}>
              فهد <span className="text-[#D4A373]">العتيبي</span>
            </span>
          </Link>

          {/* ===== الروابط (وسط) ===== */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm xl:text-[15px] font-semibold pb-1 transition-colors duration-300 ${
                  location.pathname === link.href
                    ? scrolled ? 'text-[#1A2A3A] after:w-full' : 'text-white after:w-full'
                    : scrolled 
                      ? 'text-[#1A2A3A]/70 hover:text-[#1A2A3A] after:w-0 hover:after:w-full' 
                      : 'text-white/70 hover:text-white after:w-0 hover:after:w-full'
                } after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#D4A373] after:transition-all after:duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ===== الأزرار (يمين) ===== */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all hover:-translate-y-1 whitespace-nowrap ${
                scrolled 
                  ? 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_4px_15px_rgba(37,211,102,0.3)]' 
                  : 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_4px_15px_rgba(37,211,102,0.3)]'
              }`}
            >
              <Phone size={14} />
              <span>تواصل معنا</span>
            </Link>
            <button
              className={`lg:hidden bg-transparent border-none text-2xl cursor-pointer p-1 transition-colors ${
                scrolled ? 'text-[#1A2A3A] hover:text-[#D4A373]' : 'text-white hover:text-[#D4A373]'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="القائمة"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== القائمة الجانبية للجوال ===== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-[280px] h-screen pt-20 px-6 pb-8 z-[1000] shadow-[-8px_0_30px_rgba(0,0,0,0.2)] transition-transform duration-350 lg:hidden overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } ${scrolled ? 'bg-white' : 'bg-[#1A2A3A]'}`}
      >
        <button
          className={`absolute top-5 left-5 transition-colors ${
            scrolled ? 'text-[#1A2A3A]/60 hover:text-[#1A2A3A]' : 'text-white/60 hover:text-white'
          }`}
          onClick={() => setMobileOpen(false)}
          aria-label="إغلاق"
        >
          <X size={24} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`block text-lg font-semibold py-3.5 border-b transition-colors ${
              location.pathname === link.href 
                ? 'text-[#D4A373]' 
                : scrolled 
                  ? 'text-[#1A2A3A]/80 hover:text-[#1A2A3A] border-[#1A2A3A]/10' 
                  : 'text-white/80 hover:text-[#D4A373] border-white/[0.06]'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-bold mt-6 w-full"
        >
          <Phone size={18} />
          تواصل معنا
        </Link>
      </div>
    </>
  )
}