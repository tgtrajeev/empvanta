import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#fff',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px -12px rgba(20,24,31,0.15)' : 'none',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }} aria-label="Empvanta HRMS home">
          <span
            style={{
              width: 38, height: 38, borderRadius: 10, background: 'var(--ink)',
              color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 18,
            }}
          >
            E
          </span>
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em' }}>
            Empvanta <span style={{ color: 'var(--blue)' }}>HRMS</span>
          </span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                fontSize: 15,
                fontWeight: 600,
                color: isActive ? 'var(--blue-dark)' : 'var(--ink)',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="nav-desktop">
          <Link to="/contact" className="btn btn-outline">Book a demo</Link>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: 26 }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {nav.map((item) => (
            <Link key={item.to} to={item.to} style={{ fontWeight: 600, fontSize: 16 }}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-outline btn-block">Book a demo</Link>
          <Link to="/contact" className="btn btn-primary btn-block">Get Started</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: inline-flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
