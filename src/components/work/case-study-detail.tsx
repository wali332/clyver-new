import Link from "next/link";
import type { Project } from "@/lib/content/projects";
import { ProjectVisual } from "@/components/work/project-visual";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

type CaseStudyDetailProps = {
  project: Project;
};

const narrative = [
  { key: "challenge", label: "The challenge" },
  { key: "approach", label: "The approach" },
  { key: "thinking", label: "The thinking" },
  { key: "solution", label: "The solution" },
] as const;

function NarrativeParagraphs({
  text,
  emphasized = false,
}: {
  text: string;
  emphasized?: boolean;
}) {
  const paragraphs = text.split("\n\n").filter(Boolean);

  return (
    <div
      className={
        emphasized
          ? "space-y-4 md:border-l md:border-ink/15 md:pl-5 lg:pl-6"
          : "space-y-4"
      }
    >
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={
            emphasized
              ? "text-base leading-relaxed text-ink md:text-[1.0625rem] md:leading-8"
              : "text-base leading-relaxed text-ink md:text-[1.05rem] md:leading-8"
          }
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function CaseStudyDetail({ project }: CaseStudyDetailProps) {
  const study = project.caseStudy;
  if (!study) return null;

  const outcomeLabel = study.outcomeLabel ?? "Outcome";

  return (
    <article>
      <section className="border-b border-line bg-paper pt-[4.5rem]">
        <Container className="py-10 sm:py-12 md:py-16">
          <div className="min-w-0 max-w-6xl">
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              ← Back to work
            </Link>
            <div className="mt-4 grid gap-6 sm:mt-5 sm:gap-8 md:mt-6 md:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
              <div className="min-w-0 max-w-2xl lg:py-1">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {project.category}
                </p>
                <h1 className="text-pretty-safe mt-2 font-display text-[clamp(1.875rem,7vw,4rem)] leading-[1.04] tracking-[-0.03em] text-ink sm:mt-3 md:mt-4">
                  {project.name}
                </h1>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:mt-4 md:mt-5 md:text-lg md:leading-8">
                  {project.description}
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink md:mt-4 md:leading-8">
                  {study.intro}
                </p>
              </div>
              <div className="min-w-0 w-full lg:max-w-none">
                <ProjectVisual
                  name={project.name}
                  category={project.category}
                  visualVariant={project.visualVariant}
                  variant="detail"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-surface py-12 sm:py-16 md:py-24">
        <Container>
          <div className="grid min-w-0 gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:gap-16">
            <div className="max-w-3xl space-y-0">
              {narrative.map((item, index) => {
                const isThinking = item.key === "thinking";
                const content = study[item.key];

                return (
                  <section
                    key={item.key}
                    className={`border-t border-line py-6 sm:py-8 ${index === 0 ? "border-t-0 pt-0" : ""} ${
                      isThinking ? "py-7 sm:py-9 md:py-10" : ""
                    }`}
                  >
                    <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </h2>
                    <div className="mt-4">
                      <NarrativeParagraphs text={content} emphasized={isThinking} />
                    </div>
                  </section>
                );
              })}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.35rem] border border-line bg-paper p-5 md:p-6">
                <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Clyver&apos;s role
                </h2>
                <ul className="mt-3 space-y-2">
                  {project.involvement.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {study.technology && study.technology.length > 0 ? (
                <div className="rounded-[1.35rem] border border-line bg-paper p-5 md:p-6">
                  <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Technology
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {study.technology.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="rounded-[1.35rem] border border-line bg-paper p-5 md:p-6">
                <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {outcomeLabel}
                </h2>
                <div className="mt-3 space-y-3">
                  {study.outcome.split("\n\n").filter(Boolean).map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <Button href="/#contact" size="lg" className="w-full">
                Start a similar project →
              </Button>
            </aside>
          </div>
        </Container>
      </section>
    </article>
  );
}
