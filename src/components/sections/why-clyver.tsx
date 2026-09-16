import { whyClyverPoints } from "@/lib/content/why-clyver";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";

export function WhyClyver() {
  return (
    <section className="border-b border-line bg-paper py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Clyver"
          title="Built for businesses that need clarity before code"
          description="What sets a focused product studio apart when the problem—not the stack—comes first."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.35rem] border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {whyClyverPoints.map((point) => (
            <article key={point.title} className="bg-paper p-6 md:p-8">
              <h3 className="font-display text-xl tracking-[-0.03em] text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
