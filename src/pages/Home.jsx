import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { stats, coreFeatures, howItWorks, industries, testimonials, faqs } from '../data/content.js'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Empvanta HRMS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'Empvanta HRMS is a modern HR, attendance, payroll and leave management platform with face-recognition attendance and real-time workforce analytics.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '49',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
    },
  }

  return (
    <>
      <SEO
        title="Smart Attendance & HR Management Software"
        description="Empvanta HRMS is a modern HR, attendance, payroll and leave management platform for growing businesses. Face-recognition attendance, real-time analytics and effortless compliance."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="section" style={{ paddingTop: 88 }}>
        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">HR &amp; Attendance, Simplified</span>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 54px)', marginBottom: 22 }}>
              One platform for attendance, leave &amp; payroll — built for real HR teams
            </h1>
            <p style={{ fontSize: 18, marginBottom: 32, maxWidth: 520 }}>
              Empvanta HRMS replaces spreadsheets and biometric silos with face-recognition attendance,
              automated leave workflows and payroll that reconciles itself — so HR can focus on people, not paperwork.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Book a Free Demo</Link>
              <Link to="/features" className="btn btn-outline">Explore Features →</Link>
            </div>
          </div>

          <div>
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: 'var(--ink)', padding: '40px 0' }}>
        <div className="container grid grid-4">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--gold)', fontSize: 30, fontWeight: 800 }}>{s.value}</div>
              <div style={{ color: '#aab2c0', fontSize: 13.5, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core features */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Platform</span>
            <h2>Everything HR needs, in one place</h2>
            <p>From clock-in to payslip, Empvanta connects every step of the employee attendance lifecycle.</p>
          </div>

          <div className="grid grid-3">
            {coreFeatures.map((f) => (
              <div key={f.title} className="card">
                <div className="badge-icon" style={{ background: 'rgba(0,153,230,0.1)' }}>{f.icon}</div>
                <h3 style={{ fontSize: 19, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 15 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Live in days, not months</h2>
            <p>A guided rollout gets attendance, leave and payroll running without disrupting your team.</p>
          </div>

          <div className="grid grid-4">
            {howItWorks.map((s) => (
              <div key={s.step}>
                <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--blue)', marginBottom: 12 }}>{s.step}</div>
                <h3 style={{ fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Industries</span>
            <h2>Built for every kind of workforce</h2>
            <p>From shop floors to storefronts, Empvanta adapts to how your teams actually work.</p>
          </div>

          <div className="grid grid-3">
            {industries.slice(0, 6).map((i) => (
              <div key={i.title} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 26 }}>{i.icon}</span>
                <div>
                  <h3 style={{ fontSize: 16.5, marginBottom: 6 }}>{i.title}</h3>
                  <p style={{ fontSize: 14 }}>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/industries" className="btn btn-outline">See all industries →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Customers</span>
            <h2>Trusted by HR &amp; operations teams</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <p style={{ fontSize: 15, color: 'var(--ink)', marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.slice(0, 3).map((f) => (
              <details key={f.q} className="card" style={{ padding: '20px 28px' }}>
                <summary style={{ fontWeight: 700, fontSize: 15.5, cursor: 'pointer' }}>{f.q}</summary>
                <p style={{ marginTop: 12, fontSize: 14.5 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'var(--ink)', borderRadius: 24, padding: '56px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: 28, marginBottom: 10 }}>Ready to modernize your HR operations?</h2>
              <p style={{ color: '#aab2c0' }}>Talk to our team and see Empvanta HRMS configured for your workforce.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Book a Free Demo</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function HeroGraphic() {
  return (
    <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Empvanta HRMS attendance dashboard preview">
      <rect x="20" y="20" width="440" height="380" rx="20" fill="#F3F4F6" />
      <rect x="44" y="48" width="392" height="56" rx="12" fill="#fff" stroke="#E5E7EB" />
      <circle cx="72" cy="76" r="14" fill="#0099E6" />
      <rect x="96" y="66" width="140" height="10" rx="5" fill="#14181F" opacity="0.8" />
      <rect x="96" y="84" width="90" height="8" rx="4" fill="#9AA3B1" />
      <rect x="360" y="62" width="56" height="28" rx="14" fill="#F7B418" />

      <rect x="44" y="120" width="184" height="120" rx="12" fill="#fff" stroke="#E5E7EB" />
      <rect x="60" y="136" width="90" height="9" rx="4" fill="#14181F" opacity="0.7" />
      <rect x="60" y="160" width="60" height="26" rx="8" fill="#0099E6" opacity="0.15" />
      <rect x="60" y="196" width="150" height="8" rx="4" fill="#E5E7EB" />
      <rect x="60" y="212" width="120" height="8" rx="4" fill="#E5E7EB" />

      <rect x="252" y="120" width="184" height="120" rx="12" fill="#fff" stroke="#E5E7EB" />
      <circle cx="300" cy="180" r="34" fill="none" stroke="#F7B418" strokeWidth="10" strokeDasharray="160" strokeDashoffset="40" />
      <rect x="352" y="150" width="60" height="8" rx="4" fill="#14181F" opacity="0.7" />
      <rect x="352" y="168" width="50" height="8" rx="4" fill="#9AA3B1" />
      <rect x="352" y="196" width="60" height="8" rx="4" fill="#9AA3B1" />

      <rect x="44" y="256" width="392" height="124" rx="12" fill="#fff" stroke="#E5E7EB" />
      <rect x="60" y="272" width="120" height="9" rx="4" fill="#14181F" opacity="0.7" />
      <polyline points="60,352 110,320 160,336 210,296 260,312 310,276 360,300 410,264" fill="none" stroke="#0099E6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
