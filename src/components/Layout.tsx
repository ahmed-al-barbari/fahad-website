import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import { useEffect } from 'react'

export default function Layout() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      {!isLanding && <Footer />}
      <FloatingButtons />
    </div>
  )
}
