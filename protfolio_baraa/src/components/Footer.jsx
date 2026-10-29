import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} Baraa Mardini · Full-Stack Developer
        </p>
        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}