type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-pretty-safe font-display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
