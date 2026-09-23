import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { companyValues, stats } from '../data/content.js'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Empvanta HRMS is built to remove the friction from attendance, leave and payroll for growing organizations — accurate, transparent and easy to roll out."
        path="/about"
      />

      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center', margin: '0 auto' }}>
          <span className="eyebrow">About Empvanta</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', marginBottom: 18 }}>
            We build HR software that HR teams actually enjoy using
          </h1>
          <p style={{ fontSize: 17 }}>
            Empvanta HRMS started with a simple observation: attendance and payroll shouldn't require
            spreadsheets, disputes or end-of-month firefighting. So we built a platform that automates the
            busywork and gives HR, managers and employees the same accurate, real-time picture.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid grid-3">
          {companyValues.map((v) => (
            <div key={v.title} className="card">
              <h3 style={{ fontSize: 18, marginBottom: 10 }}>{v.title}</h3>
              <p style={{ fontSize: 14.5 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid grid-4">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--blue-dark)', fontSize: 30, fontWeight: 800 }}>{s.value}</div>
              <div style={{ color: 'var(--ink-soft)', fontSize: 13.5, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'var(--ink)', borderRadius: 24, padding: '56px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: 26, marginBottom: 8 }}>Want to see Empvanta in your workplace?</h2>
              <p style={{ color: '#aab2c0' }}>We'll walk you through a setup tailored to your team.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Book a Free Demo</Link>
          </div>
        </div>
      </section>
    </>
  )
}
