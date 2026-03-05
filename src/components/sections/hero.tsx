import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-14 pt-20 md:pt-28">
      <h1 className="max-w-3xl font-heading text-5xl leading-tight md:text-7xl">
        {siteConfig.name}
      </h1>
      {siteConfig.role ? <p className="mt-4 text-lg text-accent md:text-2xl">{siteConfig.role}</p> : null}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{siteConfig.headline}</p>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{siteConfig.bio}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href={`mailto:${siteConfig.email}`}
        >
          Email Me
        </a>
        <a
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          href="#work"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}
