import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: 64, fontWeight: 800, color: 'var(--blue)', marginBottom: 12 }}>404</div>
          <h1 style={{ fontSize: 26, marginBottom: 16 }}>Page not found</h1>
          <p style={{ marginBottom: 28 }}>The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
