import { Cpu, Database, LayoutDashboard, ShieldCheck, Terminal, Wrench } from 'lucide-react';
import './Skills.css';

const GROUPS = [
  {
    icon: Terminal,
    title: 'Backend',
    items: ['C#', 'ASP.NET Core Web API', 'RESTful APIs', 'Controller–Service–DAL', 'Async/Await'],
  },
  {
    icon: Database,
    title: 'Database',
    items: [
      'SQL Server',
      'T-SQL',
      'ADO.NET',
      'Stored Procedures',
      'TVPs',
      'Transactions',
      'Concurrency Control',
      'Database Design',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    items: ['JWT Authentication', 'Refresh Token Rotation', 'Bitmask Authorization', 'BCrypt', 'CORS', 'Audit Logging'],
  },
  {
    icon: LayoutDashboard,
    title: 'Frontend & Desktop',
    items: ['React', 'Electron', 'WinForms'],
  },
  {
    icon: Cpu,
    title: 'Engineering',
    items: ['Code Generation', 'Builder Pattern', 'PowerShell', 'OOP', 'Data Structures & Algorithms'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GitHub', 'Swagger', 'Visual Studio'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">Toolbox</p>
            <h2 id="skills-title" className="section-title">Skills</h2>
          </div>
          <p className="section-lead">The technologies I use to build and ship real systems.</p>
        </header>

        <div className="skills__table">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <article key={title} className="skill-row">
              <h3 className="skill-row__title">
                <span className="skill-row__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                {title}
              </h3>
              <ul className="skill-row__list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}