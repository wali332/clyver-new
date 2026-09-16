import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";

export function FinalCta() {
  return (
    <section id="contact" className="border-b border-line bg-ink py-16 text-paper md:py-24 lg:py-28">
      <Container>
        <div className="grid min-w-0 gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/60">
              Start a conversation
            </p>
            <h2 className="text-pretty-safe mt-4 font-display text-[clamp(1.75rem,7vw,3.5rem)] leading-[1.04] tracking-[-0.03em]">
              Tell us what you&apos;re solving.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-paper/72 md:text-lg">
              Share the business problem—not the technology wish list. We&apos;ll
              respond with thoughtful questions before any implementation
              conversation begins.
            </p>
          </div>

          <div className="min-w-0 rounded-[1.35rem] border border-paper/12 bg-paper p-5 text-ink sm:p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
