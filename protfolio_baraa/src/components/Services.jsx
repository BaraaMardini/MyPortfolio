import { ArrowUpRight, Check, Database, Globe, Layers, Monitor } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Globe,
    title: 'Websites & Web Apps',
    text: 'Company websites, online systems and dashboards that work smoothly on any device.',
    points: [
      'Works on phones, tablets and computers',
      'Secure login for your team or customers',
      'Clear reports and dashboards',
    ],
  },
  {
    icon: Monitor,
    title: 'Desktop Programs',
    text: 'Programs for your shop, office or factory that run on Windows, even without internet.',
    points: [
      'Works offline when the connection drops',
      'Your software protected with licensing',
      'Connects to your central system',
    ],
  },
  {
    icon: Layers,
    title: 'Business Systems',
    text: 'Complete systems that run your daily operations, built around the way your business actually works.',
    points: [
      'Invoices, inventory and expenses',
      'Production and workflow tracking',
      'Appointments and billing',
    ],
  },
  {
    icon: Database,
    title: 'Data & Security',
    text: 'Your information stored safely and organised properly, so the right people see the right data.',
    points: [
      'Secure login and user roles',
      'Activity logs: who did what, and when',
      'Accurate, consistent records',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">What I Do</p>
            <h2 id="services-title" className="section-title">Services</h2>
          </div>
          <p className="section-lead">
            From the first idea to a finished system, I build the complete thing.
          </p>
        </header>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, text, points }) => (
            <article key={title} className="service-card">
              <span className="service-card__icon" aria-hidden="true">
                <Icon size={24} />
              </span>

              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__text">{text}</p>

              <ul className="service-card__points">
                {points.map((point) => (
                  <li key={point}>
                    <Check size={16} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <div>
            <h3 className="services__cta-title">Not sure what you need?</h3>
            <p className="services__cta-text">
              Tell me about your idea and I&apos;ll suggest the simplest way to build it.
            </p>
          </div>
          <a href="#contact" className="btn btn--primary">
            Let&apos;s Talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}