import { footerNav, siteConfig } from "@/lib/content/navigation";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/navigation/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper py-14 md:py-20">
      <Container>
        <div className="grid min-w-0 gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              A lean software studio helping businesses turn real problems into
              digital solutions—research, design, and build under one roof.
            </p>
            <div className="mt-6">
              <Button href="#contact" size="md">
                Start a Project
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Footer">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Navigation
              </p>
              <ul className="mt-4 space-y-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-ink transition-colors hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Contact
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="block break-words text-sm text-ink transition-colors hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
