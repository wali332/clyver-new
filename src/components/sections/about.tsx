import { siteConfig } from "@/lib/content/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="border-b border-line bg-surface py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid min-w-0 gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="max-w-lg lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              About
            </p>
            <h2 className="text-pretty-safe mt-4 font-display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-ink">
              A human studio, not a corporate template
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-muted md:text-lg md:leading-8">
            <p>
              Clyver Digital is a lean software and product studio. We help
              businesses turn operational problems into digital solutions—starting
              with understanding, not technology.
            </p>
            <p>
              We work with growing businesses internationally. Research, design,
              and engineering sit under one roof so the solution stays coherent
              from first conversation to launch.
            </p>
            <p>
              Direct communication, lean execution, and problem-first thinking
              define how we work. No technology for its own sake.
            </p>
            <p className="text-sm text-muted">{siteConfig.location}</p>
            <div className="pt-4">
              <Button href="#contact" variant="secondary">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
