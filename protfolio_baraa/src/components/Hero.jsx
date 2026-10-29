import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import HeroMosaic from './HeroMosaic';
import './Hero.css';

const WORDS = ['Websites', 'Web Apps', 'Desktop Apps', 'Business Systems'];

// The three layers of every system, in the order data flows through them
const STACK = [
  { layer: 'Database', tools: 'SQL Server · T-SQL · Stored Procedures' },
  { layer: 'API', tools: 'ASP.NET Core Web API · JWT' },
  { layer: 'Interface', tools: 'React · Electron · WinForms' },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <HeroMosaic />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__badge reveal" style={{ '--d': '0ms' }}>
            <span className="hero__dot" aria-hidden="true" />
            Available for freelance projects
          </p>

          <h1 id="hero-title" className="hero__title reveal" style={{ '--d': '100ms' }}>
            <span className="hero__line">
              I build
              <span className="hero__rotator" aria-hidden="true">
                <span className="hero__track">
                  {[...WORDS, WORDS[0]].map((word, i) => (
                    <span key={i} className="hero__word">{word}</span>
                  ))}
                </span>
              </span>
            </span>
            <span className="hero__sr">websites, web apps, desktop apps and business systems</span>
            <span className="hero__line">for your business.</span>
          </h1>

          <p className="hero__lead reveal" style={{ '--d': '200ms' }}>
            I&apos;m Baraa Mardini, a software developer from Damascus. I build complete websites,
            web apps and desktop programs for businesses, from the first idea to a finished system
            you can use every day.
          </p>

          <div className="hero__actions reveal" style={{ '--d': '300ms' }}>
            <a href="#contact" className="btn btn--primary">
              Let&apos;s Talk
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn btn--ghost">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="stack-card reveal" style={{ '--d': '400ms' }} aria-label="How I build a system">
          <p className="stack-card__head">From schema to screen</p>

          <ol className="stack-card__list">
            {STACK.map(({ layer, tools }, i) => (
              <li key={layer} className="stack-card__row" style={{ '--i': i }}>
                <span className="stack-card__no" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="stack-card__text">
                  <span className="stack-card__layer">{layer}</span>
                  <span className="stack-card__tools">{tools}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="stack-card__foot">
            <MapPin size={14} aria-hidden="true" />
            Damascus, Syria · open to remote work
          </p>
        </aside>
      </div>
    </section>
  );
}
