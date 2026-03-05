import { siteConfig } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function WritingSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        id="writing"
        eyebrow=""
        title="Ideas and Notes"
        description="A lightweight teaser section for essays, articles, or short notes."
      />
      <div className="mt-8 space-y-4">
        {siteConfig.writing.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="animate-rise block rounded-xl border border-line bg-surface/65 p-5 transition hover:bg-surface-elev/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
          >
            <h3 className="font-heading text-2xl">{item.title}</h3>
            <p className="mt-2 text-muted">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
