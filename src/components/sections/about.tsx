import { siteConfig } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading id="about" eyebrow="" title="Who I Am" />
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{siteConfig.bio}</p>
    </section>
  );
}
