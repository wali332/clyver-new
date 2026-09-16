"use client";

import { useState } from "react";

type ProjectLiveLinkProps = {
  website: string;
  projectName: string;
  variant?: "pill" | "subtle";
};

function getDomain(website: string) {
  return new URL(website).hostname.replace(/^www\./, "");
}

function faviconSources(domain: string) {
  return [
    `https://${domain}/favicon.ico`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];
}

export function ProjectLiveLink({
  website,
  projectName,
  variant = "pill",
}: ProjectLiveLinkProps) {
  const domain = getDomain(website);
  const sources = faviconSources(domain);
  const [sourceIndex, setSourceIndex] = useState(0);

  const className =
    variant === "subtle"
      ? "inline-flex min-h-11 max-w-full items-center gap-2 text-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      : "inline-flex min-h-11 max-w-full items-center gap-3 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/25 hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

  return (
    <a href={website} target="_blank" rel="noopener noreferrer" className={className}>
      <span
        className={
          variant === "subtle"
            ? "flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden"
            : "flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-paper"
        }
      >
        {sourceIndex < sources.length ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sources[sourceIndex]}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
            onError={() => setSourceIndex((index) => index + 1)}
          />
        ) : (
          <span className="text-[0.6rem] font-semibold uppercase text-muted" aria-hidden="true">
            {projectName.slice(0, 1)}
          </span>
        )}
      </span>
      <span className="truncate">{domain}</span>
      {variant === "pill" ? (
        <span className="shrink-0 text-muted" aria-hidden="true">
          ↗
        </span>
      ) : null}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
