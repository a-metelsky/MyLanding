import { siteConfig } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function WorkSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        id="work"
        eyebrow=""
        title="Projects and Outcomes"
        description="Use this section to demonstrate how you think, execute, and deliver measurable results."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {siteConfig.projects.map((project) => (
          <article
            key={project.title}
            className="animate-rise rounded-2xl border border-line bg-surface/80 p-6 shadow-card"
          >
            <h3 className="font-heading text-2xl">{project.title}</h3>
            <p className="mt-3 text-muted">{project.summary}</p>
            <p className="mt-3 font-medium text-accent">{project.impact}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  {tag}
                </li>
              ))}
            </ul>
            <a
              className="mt-6 inline-block text-sm font-semibold underline decoration-line underline-offset-4 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              View Details
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
