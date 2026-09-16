import { philosophyProblems } from "@/lib/content/philosophy";
import { Container } from "@/components/layout/container";

export function Philosophy() {
  return (
    <section className="border-b border-line bg-ink py-16 text-paper md:py-24 lg:py-28">
      <Container>
        <div className="grid min-w-0 gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/60">
              Philosophy
            </p>
            <h2 className="text-pretty-safe mt-4 font-display text-[clamp(1.75rem,7vw,3.5rem)] leading-[1.04] tracking-[-0.03em]">
              Technology isn&apos;t the hard part.
              <span className="mt-2 block text-paper/72">
                Knowing what to build is.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-paper/72 md:text-lg">
              <p>
                Most businesses don&apos;t need more technology for the sake of
                technology.
              </p>
              <p>
                They need a better way to attract customers, manage information,
                automate repetitive work, or run their operations.
              </p>
              <p className="text-paper">We start there.</p>
            </div>
          </div>

          <div className="space-y-0">
            {philosophyProblems.map((item, index) => (
              <article
                key={item.number}
                className={`border-t border-paper/12 py-6 sm:py-8 ${
                  index === 0 ? "border-t-0 pt-0" : ""
                }`}
              >
                <h3 className="text-pretty-safe font-display text-[1.45rem] tracking-[-0.03em] text-paper sm:text-[1.65rem] md:text-[1.75rem]">
                  {item.number} — {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-paper/72">
                  {item.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/88">
                  <span className="font-medium text-paper">Direction: </span>
                  {item.direction}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
