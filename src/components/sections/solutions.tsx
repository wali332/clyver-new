import { solutions } from "@/lib/content/solutions";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-line bg-surface py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Capabilities"
          title="What we build"
          description="Three areas where Clyver helps businesses move from problem to working solution."
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="flex flex-col justify-between rounded-[1.35rem] border border-line bg-paper p-6 md:p-8"
            >
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] text-ink md:text-[1.75rem]">
                  {solution.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {solution.description}
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {solution.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full border border-line px-3 py-1.5 text-xs text-ink"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
