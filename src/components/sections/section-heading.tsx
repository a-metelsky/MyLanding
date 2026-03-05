type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header id={id} className="scroll-mt-24">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.16em] text-muted">{eyebrow}</p> : null}
      <h2 className={`${eyebrow ? "mt-2" : ""} font-heading text-3xl md:text-4xl`}>{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-muted">{description}</p> : null}
    </header>
  );
}
