import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--ink)', color: '#cbd2dc', padding: '64px 0 32px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>Empvanta HRMS</span>
            </div>
            <p style={{ color: '#9aa3b1', fontSize: 14.5, maxWidth: 260 }}>
              Smart attendance, leave, payroll and workforce analytics — built for growing teams.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Product</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14.5 }}>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/industries">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14.5 }}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Get in touch</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14.5 }}>
              <li>info@targeticon.com</li>
              <li>610-A, Ithum Tower, Sector 62, Noida (UP)</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13.5, color: '#8a93a1' }}>
          <span>© {year} Empvanta HRMS. All rights reserved.</span>
          <span>Powered by Targeticon</span>
        </div>
      </div>
    </footer>
  )
}
