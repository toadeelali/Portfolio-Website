import Image from 'next/image';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal">
      {project.image ? (
        <div className="project-thumb">
          <Image
            className="thumb-img"
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 576px"
          />
        </div>
      ) : (
        <div className="project-thumb">
          <span className="thumb-label">Image placeholder</span>
        </div>
      )}
      <div className="project-body">
        <span className="project-no">{project.no}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
