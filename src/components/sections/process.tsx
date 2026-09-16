import { processSteps } from "@/lib/content/process";
import { Container } from "@/components/layout/container";

export function Process() {
  return (
    <section id="process" className="border-b border-line bg-paper py-16 md:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            How we work
          </p>
          <h2 className="text-pretty-safe mt-4 font-display text-[clamp(1.75rem,7vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-ink">
            We don&apos;t start with code.
          </h2>
        </div>

        <ol className="mt-10 space-y-0 md:mt-14 lg:mt-16">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="grid gap-3 border-t border-line py-6 sm:py-8 md:grid-cols-[5rem_minmax(0,0.45fr)_minmax(0,0.55fr)] md:items-start md:gap-8 lg:gap-12"
            >
              <p className="font-display text-2xl tracking-[-0.04em] text-muted/50 sm:text-3xl">
                {step.number}
              </p>
              <div>
                <h3 className="text-pretty-safe font-display text-xl tracking-[-0.03em] text-ink sm:text-2xl md:text-[1.85rem]">
                  {step.title}
                </h3>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted md:pt-0.5 md:text-[1.0625rem] md:leading-[1.65]">
                {step.description}
              </p>
              {index < processSteps.length - 1 ? (
                <div
                  className="col-span-full hidden h-px bg-gradient-to-r from-line via-line to-transparent md:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
