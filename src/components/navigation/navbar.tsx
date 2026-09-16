"use client";

import { useEffect, useId, useRef, useState } from "react";
import { primaryNav } from "@/lib/content/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/navigation/logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        isScrolled || isOpen
          ? "border-b border-line/80 bg-paper/90 shadow-[0_8px_30px_rgba(26,26,24,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-paper/70 backdrop-blur-sm"
      }`}
    >
      <Container as="nav" aria-label="Primary">
        <div className="flex h-[4.5rem] min-w-0 items-center justify-between gap-3 sm:gap-6">
          <div className="min-w-0 shrink-0">
            <Logo />
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" size="md">
              Start a Project
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink lg:hidden"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform duration-200 ${
                  isOpen ? "translate-y-[0.45rem] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[0.45rem] h-0.5 w-4 bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[0.9rem] h-0.5 w-4 bg-current transition-transform duration-200 ${
                  isOpen ? "-translate-y-[0.45rem] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!isOpen}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line/80 bg-paper lg:hidden"
      >
        <Container className="py-5 sm:py-6">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item, index) => (
              <li key={item.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="flex min-h-11 items-center rounded-lg px-2 text-base font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              href="#contact"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
