import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { pricingPlans, faqs } from '../data/content.js'

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Simple, per-employee pricing for Empvanta HRMS — attendance, leave, payroll and analytics. Plans for small teams up to large multi-location enterprises."
        path="/pricing"
      />

      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 720, textAlign: 'center', margin: '0 auto' }}>
          <span className="eyebrow">Pricing</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', marginBottom: 18 }}>Simple pricing that scales with you</h1>
          <p style={{ fontSize: 17 }}>Pay per active employee, per month. No setup fees, no hidden costs.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid grid-3">
          {pricingPlans.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{
                border: p.highlight ? '2px solid var(--gold)' : '1px solid var(--border)',
                position: 'relative',
                boxShadow: p.highlight ? 'var(--shadow)' : 'none',
              }}
            >
              {p.highlight && (
                <span style={{ position: 'absolute', top: -14, left: 32, background: 'var(--gold)', color: 'var(--ink)', fontSize: 12, fontWeight: 800, padding: '5px 12px', borderRadius: 999 }}>
                  MOST POPULAR
                </span>
              )}
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>{p.name}</h3>
              <p style={{ fontSize: 14, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 36, fontWeight: 800 }}>{p.price}</span>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>{p.period}</div>
              </div>
              <Link to="/contact" className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline'} btn-block`} style={{ marginBottom: 28 }}>
                {p.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Link>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontSize: 14, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: 800 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Pricing &amp; plan questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((f) => (
              <details key={f.q} className="card" style={{ padding: '20px 28px' }}>
                <summary style={{ fontWeight: 700, fontSize: 15.5, cursor: 'pointer' }}>{f.q}</summary>
                <p style={{ marginTop: 12, fontSize: 14.5 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
