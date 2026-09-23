import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { industries } from '../data/content.js'

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries"
        description="Empvanta HRMS adapts to manufacturing, construction, healthcare, retail, IT and education — with attendance, leave and payroll workflows built for each workforce."
        path="/industries"
      />

      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center', margin: '0 auto' }}>
          <span className="eyebrow">Industries</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', marginBottom: 18 }}>Built for how your workforce actually works</h1>
          <p style={{ fontSize: 17 }}>From shop floors to hospitals to storefronts, Empvanta configures attendance, shifts and payroll to match your industry.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid grid-3">
          {industries.map((i) => (
            <div key={i.title} className="card">
              <div className="badge-icon" style={{ background: 'rgba(0,153,230,0.1)', fontSize: 26 }}>{i.icon}</div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{i.title}</h3>
              <p style={{ fontSize: 14.5 }}>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'var(--ink)', borderRadius: 24, padding: '56px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: 26, marginBottom: 8 }}>Don't see your industry?</h2>
              <p style={{ color: '#aab2c0' }}>Empvanta is flexible enough to fit almost any shift-based or distributed workforce.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
