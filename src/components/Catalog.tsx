import type { Category } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Catalog({ category }: { category: Category }) {
  return (
    <section className="catalog">
      <div className="inner">
        <div className="catalog-head reveal">
          <h2>Built to date</h2>
          <p>{category.countLabel}</p>
        </div>
        <div className="project-grid">
          {category.projects.map((project) => (
            <ProjectCard key={project.no} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
