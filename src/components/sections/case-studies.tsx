import Link from "next/link";
import { getCaseStudyProjects } from "@/lib/content/projects";
import { ProjectVisual } from "@/components/work/project-visual";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";

export function CaseStudies() {
  const caseStudies = getCaseStudyProjects();

  return (
    <section id="case-studies" className="border-b border-line bg-surface py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="How Clyver approaches real business problems"
          description="Selected engagements showing challenge, approach, and deliverables."
        />

        <div className="mt-12 grid gap-6 md:mt-14 md:gap-8 lg:mt-16 lg:grid-cols-2">
          {caseStudies.map((project) => {
            const study = project.caseStudy;
            if (!study) return null;

            return (
              <article
                key={project.slug}
                className="relative flex flex-col rounded-[1.35rem] border border-line bg-paper"
              >
                <div className="overflow-hidden rounded-t-[1.35rem]">
                  <ProjectVisual
                    name={project.name}
                    category={project.category}
                    visualVariant={project.visualVariant}
                    variant="hero"
                    embedded
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                  <h3 className="text-pretty-safe font-display text-[clamp(1.5rem,5vw,1.75rem)] tracking-[-0.03em] text-ink md:text-2xl">
                    {project.name}
                  </h3>
                  {project.note ? (
                    <p className="mt-2 text-sm italic leading-relaxed text-muted">
                      {project.note}
                    </p>
                  ) : null}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    {study.challenge}
                  </p>
                  <div className="relative z-10 mt-5 sm:mt-6">
                    <Button
                      href={`/work/${project.slug}`}
                      variant="secondary"
                      className="w-full sm:w-auto"
                    >
                      Read full case study
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          More project detail available on request.{" "}
          <Link
            href="#contact"
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            Start a conversation
          </Link>
        </p>
      </Container>
    </section>
  );
}
