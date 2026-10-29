import { BookOpen, Download, GraduationCap, Languages, MapPin } from 'lucide-react';
import portrait from '../assets/about/baraa.webp';
import './About.css';

const FACTS = [
  { icon: MapPin, label: 'Location', value: 'Damascus, Syria · open to remote work' },
  { icon: GraduationCap, label: 'Education', value: 'Information Engineering, IUST' },
  { icon: BookOpen, label: 'Training', value: '23 programming courses (Programming Advices)' },
  { icon: Languages, label: 'Languages', value: 'Arabic (native) · English (intermediate)' },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about__inner">
        <figure className="about__photo">
<img src={portrait} alt="Portrait of Baraa Mardini" width="800" height="1000" loading="lazy" />          <figcaption className="about__caption">
            <MapPin size={14} aria-hidden="true" />
            Damascus, Syria
          </figcaption>
        </figure>

        <div className="about__content">
          <p className="eyebrow">About Me</p>
          <h2 id="about-title" className="about__title">
            One developer, from database to interface.
          </h2>

          <p className="about__text">
            I&apos;m Baraa, a full-stack developer based in Damascus, working with clients locally and
            remotely. I design the database, build the API and, when the project needs it, the
            interface, so your system has a single owner from schema to screen.
          </p>
          <p className="about__text">
            I built my own code generator that scaffolds ASP.NET Core backends from SQL Server
            metadata, and I reuse it across my systems to deliver faster without cutting corners
            on security, transactions and data integrity.
          </p>

          <dl className="about__facts">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="about__fact">
                <dt className="about__fact-label">
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </dt>
                <dd className="about__fact-value">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__actions">
            <a href="/Baraa_Mardini_CV.pdf" className="btn btn--primary" download>
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
