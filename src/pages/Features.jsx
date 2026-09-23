import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { coreFeatures } from '../data/content.js'

const detailed = [
  {
    title: 'Face-Recognition & Biometric Attendance',
    desc: 'Contactless face-recognition check-ins, fingerprint biometric device support, QR codes and geo-fenced mobile clock-in — pick what fits each site. Every punch is timestamped and tamper-proof, eliminating buddy punching and disputed hours.',
    points: ['Contactless face recognition', 'Biometric device integration', 'Geo-fenced mobile check-in', 'Offline capture with auto-sync'],
  },
  {
    title: 'Leave Management',
    desc: 'Configure unlimited leave types, carry-forward rules and multi-level approval chains. Employees see real-time balances; managers approve from their phone in seconds.',
    points: ['Custom leave policies per team', 'Multi-level approval workflows', 'Holiday & shift calendars', 'Real-time balance tracking'],
  },
  {
    title: 'Payroll & Statutory Compliance',
    desc: 'Attendance and leave data flow directly into payroll — no manual reconciliation. Statutory deductions, payslips and compliance reports are generated automatically each cycle.',
    points: ['Attendance-linked payroll runs', 'Statutory deductions & filings', 'Auto-generated payslips', 'Audit-ready compliance reports'],
  },
  {
    title: 'Employee Self-Service',
    desc: 'A mobile-first portal lets employees clock in, apply for leave, view payslips and update personal details — cutting routine queries out of HR\'s day.',
    points: ['Mobile & web app access', 'Digital payslips & documents', 'Profile & document updates', 'Push notifications & reminders'],
  },
  {
    title: 'Workforce Analytics & Reporting',
    desc: 'Live dashboards surface attendance trends, overtime exposure and absenteeism by team, site or role — so leaders can act before small issues become big ones.',
    points: ['Real-time attendance dashboards', 'Overtime & absenteeism trends', 'Custom exportable reports', 'Role-based access to insights'],
  },
  {
    title: 'Integrations & Open API',
    desc: 'Connect Empvanta to the ERP, accounting or biometric systems you already run, using REST APIs and webhooks maintained by our integration team.',
    points: ['REST API & webhooks', 'ERP & accounting connectors', 'Biometric hardware support', 'Single sign-on (SSO)'],
  },
]

export default function Features() {
  return (
    <>
      <SEO
        title="Features"
        description="Explore Empvanta HRMS features: face-recognition attendance, leave management, payroll automation, employee self-service, workforce analytics and open integrations."
        path="/features"
      />

      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center', margin: '0 auto' }}>
          <span className="eyebrow">Features</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', marginBottom: 18 }}>
            One platform, every HR workflow
          </h1>
          <p style={{ fontSize: 17 }}>
            Empvanta HRMS brings attendance, leave, payroll and analytics together — so nothing gets lost between systems.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid grid-3">
          {coreFeatures.map((f) => (
            <div key={f.title} className="card">
              <div className="badge-icon" style={{ background: 'rgba(247,180,24,0.15)' }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {detailed.map((d, idx) => (
            <div
              key={d.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 40,
                alignItems: 'center',
                direction: idx % 2 === 1 ? 'rtl' : 'ltr',
              }}
              className="feature-row"
            >
              <div style={{ direction: 'ltr' }}>
                <h2 style={{ fontSize: 24, marginBottom: 14 }}>{d.title}</h2>
                <p style={{ fontSize: 15.5, marginBottom: 20 }}>{d.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {d.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 10, fontSize: 14.5, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--blue)', fontWeight: 800 }}>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ direction: 'ltr' }}>
                <div className="card" style={{ background: '#fff', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 64, opacity: 0.9 }}>{coreFeatures[idx % coreFeatures.length].icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'var(--ink)', borderRadius: 24, padding: '56px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: 26, marginBottom: 8 }}>See these features in action</h2>
              <p style={{ color: '#aab2c0' }}>Get a walkthrough tailored to your workforce size and industry.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Book a Free Demo</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .feature-row { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </>
  )
}
