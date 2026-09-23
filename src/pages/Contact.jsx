import { useState } from 'react'
import SEO from '../components/SEO.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the Empvanta HRMS team to book a free demo, ask about pricing, or discuss your attendance and payroll needs."
        path="/contact"
      />

      <section className="section">
        <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="eyebrow">Contact</span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 18 }}>Let's talk about your workforce</h1>
            <p style={{ fontSize: 16.5, marginBottom: 32 }}>
              Tell us a bit about your organization and we'll get back to you within one business day to
              schedule a personalized walkthrough of Empvanta HRMS.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <ContactRow icon="✉️" label="Email" value="info@targeticon.com" />
              <ContactRow icon="📍" label="Office" value="610-A, Ithum Tower, Sector 62, Noida (UP)" />
            </div>
          </div>

          <div className="card">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 20, marginBottom: 10 }}>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
                <p style={{ fontSize: 15 }}>We've received your message and will reach out to {form.email} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Work email" name="email" type="email" value={form.email} onChange={handleChange} required />
                <Field label="Company" name="company" value={form.company} onChange={handleChange} />
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: 13.5, fontWeight: 700, marginBottom: 8 }}>
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: 14.5, resize: 'vertical' }}
                    placeholder="Tell us about your team size, industry, or current attendance setup"
                  />
                </div>
                {status === 'error' && (
                  <p style={{ fontSize: 13.5, color: '#c0392b' }}>
                    {errorMessage} You can also reach us directly at info@targeticon.com.
                  </p>
                )}
                <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
                <p style={{ fontSize: 12, color: 'var(--ink-soft)', textAlign: 'center' }}>
                  We respect your privacy. Your details are never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,153,230,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19 }}>
        {icon}
      </span>
      <div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>{label}</div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>{value}</div>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} style={{ display: 'block', fontSize: 13.5, fontWeight: 700, marginBottom: 8 }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: 14.5 }}
      />
    </div>
  )
}
