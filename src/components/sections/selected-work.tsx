import Link from "next/link";
import { projects } from "@/lib/content/projects";
import { ProjectLiveLink } from "@/components/work/project-live-link";
import { ProjectVisual } from "@/components/work/project-visual";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";

function statusLabel(status: string) {
  if (status === "in-development") return "In development";
  return status;
}

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-line bg-paper py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Work"
          title="Selected work"
          description="A curated look at projects Clyver has helped shape."
        />

        <div className="mt-12 space-y-14 md:mt-14 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={project.slug}
                className={`grid min-w-0 gap-5 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-10 ${
                  index > 0 ? "border-t border-line pt-14 md:pt-20 lg:pt-24" : ""
                }`}
              >
                <div className={`min-w-0 ${reversed ? "lg:order-2" : ""}`}>
                  <ProjectVisual
                    name={project.name}
                    category={project.category}
                    visualVariant={project.visualVariant}
                    variant="showcase"
                  />
                </div>

                <div
                  className={`flex min-w-0 flex-col justify-center lg:py-2 ${
                    reversed ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {project.category}
                    {project.status ? (
                      <span className="text-muted/80"> · {statusLabel(project.status)}</span>
                    ) : null}
                  </p>

                  <h3 className="text-pretty-safe mt-3 font-display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.04] tracking-[-0.03em] text-ink">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg md:leading-7">
                    {project.summary}
                  </p>

                  <div className="mt-5">
                    {project.caseStudy ? (
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-muted hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                      >
                        Read case study →
                      </Link>
                    ) : (
                      <Link
                        href="#contact"
                        className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-muted hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                      >
                        Discuss a similar project →
                      </Link>
                    )}
                  </div>

                  <div className="mt-4">
                    <ProjectLiveLink
                      website={project.website}
                      projectName={project.name}
                      variant="subtle"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
