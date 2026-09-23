export const nav = [
  { label: 'Features', to: '/features' },
  { label: 'Industries', to: '/industries' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
]

export const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '35+', label: 'Countries Supported' },
  { value: '10K+', label: 'Attendance Logs / Day' },
  { value: '4.8/5', label: 'Average Customer Rating' },
]

export const coreFeatures = [
  {
    icon: '🕒',
    title: 'Smart Attendance',
    desc: 'Face-recognition, biometric, geo-fenced and QR check-ins that stop buddy punching and reconcile shifts automatically.',
  },
  {
    icon: '🌴',
    title: 'Leave Management',
    desc: 'Configurable leave policies, approval chains and holiday calendars with real-time balance visibility for every employee.',
  },
  {
    icon: '💵',
    title: 'Payroll & Compliance',
    desc: 'Attendance-linked payroll runs, statutory deductions and audit-ready reports that keep you compliant across regions.',
  },
  {
    icon: '👤',
    title: 'Employee Self-Service',
    desc: 'A mobile-first portal where employees clock in, request leave, view payslips and update details without HR back-and-forth.',
  },
  {
    icon: '📊',
    title: 'Workforce Analytics',
    desc: 'Live dashboards on attendance trends, overtime, absenteeism and headcount to help managers act before issues escalate.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integrations',
    desc: 'Connect Empvanta to your existing ERP, payroll and biometric hardware through open REST APIs and webhooks.',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Onboard your workforce',
    desc: 'Bulk import employees, define departments, shifts and leave policies in a guided setup — live in days, not months.',
  },
  {
    step: '02',
    title: 'Capture attendance automatically',
    desc: 'Face recognition, biometric devices or mobile geo check-in feed attendance into Empvanta in real time.',
  },
  {
    step: '03',
    title: 'Automate approvals & payroll',
    desc: 'Leave requests route to the right manager, and attendance flows straight into payroll — no spreadsheets required.',
  },
  {
    step: '04',
    title: 'Track, report, improve',
    desc: 'Built-in dashboards surface trends across teams and locations so leadership always has an accurate picture.',
  },
]

export const industries = [
  { icon: '🏭', title: 'Manufacturing', desc: 'Shift-based attendance and contract labor tracking across plants and shop floors.' },
  { icon: '🏗️', title: 'Construction & EPC', desc: 'Site-wise, geo-fenced attendance for distributed and contract workforces.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Round-the-clock shift rostering and compliance-ready staff attendance records.' },
  { icon: '🛍️', title: 'Retail & Hospitality', desc: 'Multi-location staff scheduling with real-time visibility for area managers.' },
  { icon: '💼', title: 'IT & Professional Services', desc: 'Flexible/remote check-ins with project-linked timesheets and leave tracking.' },
  { icon: '🎓', title: 'Education', desc: 'Faculty and staff attendance, leave and payroll on a single unified platform.' },
  { icon: '🛢️', title: 'Oil & Gas', desc: 'Rig and site-wise attendance with rotational shift patterns and contractor compliance tracking.' },
  { icon: '💊', title: 'Pharmaceutical', desc: 'GMP-compliant shift attendance and workforce records across manufacturing and R&D facilities.' },
  { icon: '📦', title: 'FMCG', desc: 'Multi-plant and distribution workforce attendance with real-time visibility across supply chain sites.' },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '₹49',
    period: 'per employee / month',
    desc: 'For small teams getting started with digital attendance and leave tracking.',
    features: [
      'Mobile & web attendance',
      'Leave management',
      'Employee self-service portal',
      'Standard reports',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹89',
    period: 'per employee / month',
    desc: 'For scaling companies that need payroll, analytics and biometric integration.',
    features: [
      'Everything in Starter',
      'Face-recognition attendance',
      'Payroll & compliance automation',
      'Advanced workforce analytics',
      'API & integrations',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to your org',
    desc: 'For large or multi-location organizations with complex workforce needs.',
    features: [
      'Everything in Growth',
      'Multi-entity & multi-country payroll',
      'Custom roles & approval workflows',
      'Dedicated success manager',
      'SLA-backed uptime & support',
      'Onboarding & data migration',
    ],
    highlight: false,
  },
]

export const testimonials = [
  {
    quote: 'Empvanta cut our monthly payroll reconciliation time from four days to under four hours. The face-recognition attendance alone eliminated our buddy-punching problem.',
    name: 'Priya Nair',
    role: 'HR Director, manufacturing group',
  },
  {
    quote: 'Rolling out Empvanta across 12 sites took less than three weeks. Our site managers finally have real-time visibility into who is present, on leave, or on overtime.',
    name: 'Arjun Mehta',
    role: 'VP Operations, EPC contractor',
  },
  {
    quote: 'The self-service portal alone paid for itself — HR stopped fielding leave-balance questions and started focusing on actual people work.',
    name: 'Sara Thomas',
    role: 'Head of People, retail chain',
  },
]

export const faqs = [
  {
    q: 'How fast can we go live with Empvanta HRMS?',
    a: 'Most teams are fully onboarded within 1–3 weeks, including employee data import, policy configuration and attendance device setup. Our implementation specialists guide you through every step.',
  },
  {
    q: 'Does Empvanta support biometric and face-recognition attendance?',
    a: 'Yes. Empvanta supports face-recognition, fingerprint biometric devices, QR check-ins and geo-fenced mobile attendance — you can mix and match by site or department.',
  },
  {
    q: 'Can Empvanta handle multiple locations and countries?',
    a: 'Empvanta is built for multi-location and multi-entity organizations, with country-specific statutory compliance available on the Enterprise plan.',
  },
  {
    q: 'Will Empvanta integrate with our existing payroll or ERP system?',
    a: 'Empvanta exposes open REST APIs and webhooks, and our team can help you connect it to popular ERP, accounting and payroll systems already in use at your company.',
  },
  {
    q: 'Is employee data secure on Empvanta?',
    a: 'Empvanta uses encrypted data storage and transmission, role-based access control, and regular security audits to keep workforce data protected at every layer.',
  },
]

export const companyValues = [
  { title: 'Built for real HR teams', desc: 'Every workflow is designed with input from HR practitioners who deal with attendance and payroll headaches every day.' },
  { title: 'Accuracy you can trust', desc: 'Biometric and face-recognition attendance remove the guesswork and disputes that come with manual timesheets.' },
  { title: 'Transparent by design', desc: 'Employees and managers see the same real-time data — no black boxes, no end-of-month surprises.' },
]
