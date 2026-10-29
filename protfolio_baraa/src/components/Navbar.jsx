import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import avatar from '../assets/about/avatar.webp';

// Order must match the order of the sections on the page.
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const DESKTOP_QUERY = '(min-width: 1025px)';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const toggleRef = useRef(null);
  const listRef = useRef(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Moves the desktop indicator under the active link.
  // Re-measured on resize and once web fonts finish loading (they change link widths).
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    const place = () => {
      const link = list.querySelector('.navbar__link.is-active');
      if (!link) return;
      list.style.setProperty('--ind-x', `${link.offsetLeft}px`);
      list.style.setProperty('--ind-w', `${link.offsetWidth}px`);
      list.dataset.ready = '';
    };

    place();
    document.fonts?.ready.then(place);
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [active]);

  // Scroll state + scroll-spy.
  // The active section is the last one whose top has passed the reading line.
  useEffect(() => {
    const ids = NAV_LINKS.map(({ id }) => id);
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 12);

      const line = window.innerHeight * 0.35;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        const last = [...ids].reverse().find((id) => document.getElementById(id));
        if (last) current = last;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Escape closes the menu and returns focus to the toggle button
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset the menu when the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${isOpen ? ' navbar--open' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu} aria-label="Baraa Mardini, home">
          <img className="navbar__avatar" src={avatar} alt="" width="44" height="44" />
          <span className="navbar__id">
            <span className="navbar__name">Baraa Mardini</span>
            <span className="navbar__role">Full-Stack Developer</span>
          </span>
        </a>

        <nav id="primary-nav" className="navbar__nav" aria-label="Primary">
          <ul ref={listRef} className="navbar__list">
            {NAV_LINKS.map(({ id, label }, i) => (
              <li key={id} style={{ '--i': i }}>
                <a
                  href={`#${id}`}
                  className={`navbar__link${active === id ? ' is-active' : ''}`}
                  aria-current={active === id ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar__cta navbar__cta--mobile" onClick={closeMenu}>
            Let&apos;s Talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>

        <a href="#contact" className="navbar__cta navbar__cta--desktop">
          Let&apos;s Talk
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="navbar__burger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className="navbar__backdrop" aria-hidden="true" onClick={closeMenu} />
    </header>
  );
}