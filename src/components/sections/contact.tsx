import { siteConfig } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        id="contact"
        eyebrow=""
        title="Let’s Connect"
        description="Email is the fastest way to reach me."
      />
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.socialLinks.github}
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        <a
          href={siteConfig.socialLinks.linkedin}
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
