import { siteConfig } from "@/lib/content/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const pipeline = [
  { label: "Research", detail: "Understand the problem." },
  { label: "Design", detail: "Shape the right experience." },
  { label: "Build", detail: "Turn it into software." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper pt-[4.5rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(44,62,80,0.07),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(74,69,64,0.06),transparent_38%)]" />

      <Container className="relative grid gap-8 py-14 sm:py-16 md:gap-10 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14 lg:py-20">
        <div className="min-w-0 max-w-2xl motion-safe:animate-fade-up">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Digital Product &amp; Software Studio
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.02] tracking-[-0.04em] text-ink">
            <span className="block">Your business has a problem.</span>
            <span className="mt-2 block text-muted sm:mt-3">
              Let&apos;s build the solution.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:mt-7 md:text-lg md:leading-8">
            When your business outgrows its digital presence, Clyver helps you
            build what comes next — from digital experiences to custom software
            and automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              Discuss Your Project
            </Button>
            <Button href="#work" variant="secondary" size="lg" className="w-full sm:w-auto">
              See Our Work
            </Button>
          </div>
          <p className="mt-7 text-sm leading-relaxed text-muted">{siteConfig.location}</p>
        </div>

        <div
          className="min-w-0 motion-safe:animate-fade-up motion-safe:[animation-delay:120ms] lg:self-center"
          aria-label="Our approach: research, design, and build"
        >
          <div className="rounded-[1.35rem] border border-line bg-surface p-4 sm:p-5 md:p-6">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted">
              How we work
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3 md:gap-5">
              {pipeline.map((step, index) => (
                <div
                  key={step.label}
                  className={index > 0 ? "md:border-l md:border-line md:pl-5" : undefined}
                >
                  <p className="font-display text-lg tracking-[-0.03em] text-ink">
                    0{index + 1} — {step.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
