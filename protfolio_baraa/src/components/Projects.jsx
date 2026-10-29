import { ArrowUpRight, Code, Layers, Play } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import './Projects.css';

// Picks up src/assets/projects/<slug>/cover.webp if it exists.
// A missing image never breaks the build; a placeholder is shown instead.
const COVERS = import.meta.glob('../assets/projects/*/cover.webp', {
  eager: true,
  import: 'default',
});

const GITHUB_URL = 'https://github.com/BaraaMardini';

const external = { target: '_blank', rel: 'noopener noreferrer' };

function ProjectCard({ project }) {
  const { slug, title, kind, description, tags, video, github } = project;
  const cover = COVERS[`../assets/projects/${slug}/cover.webp`];

  const media = (
    <>
      {cover ? (
        <img
          className="project-card__img"
          src={cover}
          alt={`${title} screenshot`}
          loading="lazy"
        />
      ) : (
        <div className="project-card__placeholder" aria-hidden="true">
          <Layers size={34} />
        </div>
      )}
      <span className="project-card__kind">{kind}</span>
      {video && (
        <span className="project-card__play" aria-hidden="true">
          <Play size={22} />
        </span>
      )}
    </>
  );

  return (
    <article className="project-card">
      {video ? (
        <a
          href={video}
          className="project-card__media"
          aria-label={`Watch demo of ${title}`}
          {...external}
        >
          {media}
        </a>
      ) : (
        <div className="project-card__media">{media}</div>
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__text">{description}</p>

        <ul className="project-card__tags" aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {(video || github) && (
          <div className="project-card__actions">
            {video && (
              <a href={video} className="btn btn--primary btn--sm" {...external}>
                <Play size={16} aria-hidden="true" />
                Watch Demo
              </a>
            )}
            {github && (
              <a href={github} className="btn btn--ghost btn--sm" {...external}>
                <Code size={16} aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-head">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 id="projects-title" className="section-title">Projects</h2>
          </div>
          <p className="section-lead">
            Real systems built end to end: database, API and interface.
          </p>
        </header>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          {/* Closes the grid: 5 projects + this card fill 3 or 2 columns evenly */}
          <a href={GITHUB_URL} className="project-more" {...external}>
            <span className="project-more__icon" aria-hidden="true">
              <Code size={22} />
            </span>
            <span className="project-more__title">More on GitHub</span>
            <span className="project-more__text">
              Source code for these systems and the rest of my work.
            </span>
            <span className="project-more__link">
              github.com/BaraaMardini
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
