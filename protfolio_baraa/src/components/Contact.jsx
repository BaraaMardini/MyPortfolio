import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Code,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import './Contact.css';

const EMAIL = 'bara.mardini488@gmail.com';
const PHONE_DISPLAY = '+963 994 413 136';
const WHATSAPP_URL = `https://wa.me/963994413136?text=${encodeURIComponent(
  "Hi Baraa, I'd like to discuss a project."
)}`;

// Leave one empty ('') to hide its button.
const INSTAGRAM_URL = 'https://www.instagram.com/baraamardini';
const FACEBOOK_URL = 'https://www.facebook.com/share/1EBs4wx9Pw/';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the email is still visible and clickable.
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel">
          {/* ---------- Left: message + main actions ---------- */}
          <div className="contact__main">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="contact__title">
              Have a project in mind?{' '}
              <span className="contact__accent">Let&apos;s talk.</span>
            </h2>
            <p className="contact__lead">
              Tell me about your website, web app or desktop program, and we&apos;ll work out
              the best way to build it.
            </p>

            <div className="contact__actions">
              <a href={WHATSAPP_URL} className="btn btn--primary btn--lg" {...external}>
                <MessageCircle size={20} aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn--ghost btn--lg">
                <Mail size={20} aria-hidden="true" />
                Send an Email
              </a>
            </div>

            <p className="contact__status">
              <span className="contact__dot" aria-hidden="true" />
              Available for local and remote projects
              <span className="contact__sep" aria-hidden="true">·</span>
              <MapPin size={15} aria-hidden="true" />
              Damascus, Syria
            </p>

            {(INSTAGRAM_URL || FACEBOOK_URL) && (
              <div className="contact__social">
                <span className="contact__social-label">Also on</span>
                {INSTAGRAM_URL && (
                  <a className="contact__social-link" href={INSTAGRAM_URL} {...external}>
                    <InstagramIcon />
                    Instagram
                  </a>
                )}
                {FACEBOOK_URL && (
                  <a className="contact__social-link" href={FACEBOOK_URL} {...external}>
                    <FacebookIcon />
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>

          {/* ---------- Right: all channels ---------- */}
          <ul className="contact__list">
            <li className="contact-row">
              <span className="contact-row__icon" aria-hidden="true">
                <MessageCircle size={20} />
              </span>
              <div className="contact-row__text">
                <span className="contact-row__label">WhatsApp</span>
                <a className="contact-row__link" href={WHATSAPP_URL} {...external}>
                  {PHONE_DISPLAY}
                </a>
              </div>
              <ArrowUpRight className="contact-row__arrow" size={18} aria-hidden="true" />
            </li>

            <li className="contact-row">
              <span className="contact-row__icon" aria-hidden="true">
                <Mail size={20} />
              </span>
              <div className="contact-row__text">
                <span className="contact-row__label">Email</span>
                <a className="contact-row__link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
              <button type="button" className="contact-row__copy" onClick={copyEmail}>
                {copied ? (
                  <Check size={15} aria-hidden="true" />
                ) : (
                  <Copy size={15} aria-hidden="true" />
                )}
                <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </li>

            <li className="contact-row">
              <span className="contact-row__icon" aria-hidden="true">
                <Briefcase size={20} />
              </span>
              <div className="contact-row__text">
                <span className="contact-row__label">LinkedIn</span>
                <a
                  className="contact-row__link"
                  href="https://www.linkedin.com/in/baraa-mardini-a42698356"
                  {...external}
                >
                  baraa-mardini
                </a>
              </div>
              <ArrowUpRight className="contact-row__arrow" size={18} aria-hidden="true" />
            </li>

            <li className="contact-row">
              <span className="contact-row__icon" aria-hidden="true">
                <Code size={20} />
              </span>
              <div className="contact-row__text">
                <span className="contact-row__label">GitHub</span>
                <a className="contact-row__link" href="https://github.com/BaraaMardini" {...external}>
                  BaraaMardini
                </a>
              </div>
              <ArrowUpRight className="contact-row__arrow" size={18} aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}