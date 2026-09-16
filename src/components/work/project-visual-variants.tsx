import Image from "next/image";
import type { ProjectVisualConfig } from "@/lib/content/project-visuals";

type VariantProps = {
  name: string;
  category: string;
  config: ProjectVisualConfig;
  layout: "hero" | "card" | "detail" | "showcase";
};

function JayaVisual({ name, category, config, layout }: VariantProps) {
  const { palette, image } = config;
  const isDetail = layout === "detail";
  const isShowcase = layout === "showcase";
  const detailPanelClass = isDetail
    ? "relative flex flex-col justify-start gap-3 p-4 md:p-5"
    : "relative flex flex-col justify-between p-5 md:p-6";

  if (isShowcase && image) {
    return (
      <div className="grid h-full min-h-full grid-cols-[minmax(0,0.2fr)_minmax(0,0.8fr)] overflow-hidden">
        <div
          className="relative flex flex-col justify-between p-4 md:p-5"
          style={{ backgroundColor: palette.surface }}
        >
          <p
            className="text-[0.62rem] font-medium uppercase tracking-[0.18em]"
            style={{ color: palette.muted }}
          >
            {category}
          </p>
          <div>
            <p
              className="font-display text-[clamp(1.1rem,2.2vw,1.65rem)] leading-tight tracking-[-0.03em]"
              style={{ color: palette.text }}
            >
              {name}
            </p>
            <div
              className="mt-3 h-1 w-10 rounded-full"
              style={{ backgroundColor: palette.primary }}
            />
          </div>
        </div>
        <div
          className="flex min-h-0 flex-col"
          style={{ backgroundColor: palette.background }}
        >
          <div
            className="flex items-center gap-2 border-b px-3 py-2"
            style={{ borderColor: `${palette.primary}22`, backgroundColor: palette.surface }}
          >
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: palette.primary }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${palette.primary}55` }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${palette.primary}33` }} />
            </div>
            <div
              className="h-1.5 flex-1 rounded-full"
              style={{ backgroundColor: `${palette.primary}18` }}
            />
          </div>
          <div
            className="flex items-center gap-3 border-b px-3 py-2"
            style={{ borderColor: `${palette.primary}18`, backgroundColor: `${palette.surface}cc` }}
          >
            {["Home", "Spaces", "Contact"].map((item) => (
              <span
                key={item}
                className="text-[0.58rem] font-medium uppercase tracking-[0.14em]"
                style={{ color: item === "Home" ? palette.primary : palette.muted }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="relative min-h-0 flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 640px"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 55%, ${palette.primary}28 100%)`,
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid h-full min-h-full overflow-hidden ${
        isDetail ? "md:grid-cols-[0.34fr_1fr]" : "grid-cols-1"
      }`}
    >
      <div className={detailPanelClass} style={{ backgroundColor: palette.surface }}>
        <p
          className="text-[0.68rem] font-medium uppercase tracking-[0.18em]"
          style={{ color: palette.muted }}
        >
          {category}
        </p>
        <div>
          <p
            className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-[-0.03em]"
            style={{ color: palette.text }}
          >
            {name}
          </p>
          <p className="mt-2 text-sm" style={{ color: palette.muted }}>
            Co-working · Client-directed design
          </p>
        </div>
        <div className={`h-1 w-16 rounded-full ${isDetail ? "" : "mt-4"}`} style={{ backgroundColor: palette.primary }} />
      </div>
      {image ? (
        <div className={`relative ${isDetail ? "min-h-[8rem] md:min-h-full" : "min-h-[10rem] md:min-h-full"}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            priority={isDetail}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 55%, ${palette.primary}22 100%)`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

function EverootVisual({ name, category, config, layout }: VariantProps) {
  const { palette } = config;
  const isCompact = layout === "hero";
  const isShowcase = layout === "showcase";
  const isDetail = layout === "detail";
  const usesEditorialMock = isShowcase || isDetail;

  if (usesEditorialMock) {
    const shellPadding = isDetail ? "p-3 md:p-4" : "p-4 md:p-5";
    const titleClass = isDetail
      ? "mt-1.5 font-display text-[clamp(1.2rem,2.6vw,1.85rem)] leading-[0.98] tracking-[-0.04em]"
      : "mt-2 font-display text-[clamp(1.45rem,3.2vw,2.35rem)] leading-[0.98] tracking-[-0.04em]";
    const productTiles = [
      { label: "Spices", tone: "#c4a574" },
      { label: "Grains", tone: "#d4c4a0" },
      { label: "Pulses", tone: "#8fa888" },
      { label: "Export", tone: "#3D4F41" },
    ];

    return (
      <div
        className="relative h-full min-h-full overflow-hidden"
        style={{ backgroundColor: palette.background }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[38%] opacity-35"
          style={{
            backgroundImage: `linear-gradient(${palette.primary} 1px, transparent 1px), linear-gradient(90deg, ${palette.primary} 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
            maskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
          }}
        />
        <div className={`relative z-10 flex h-full flex-col ${shellPadding}`}>
          <p
            className="text-[0.62rem] font-medium uppercase tracking-[0.18em]"
            style={{ color: palette.muted }}
          >
            {category}
          </p>
          <p className={titleClass} style={{ color: palette.primary }}>
            {name}
          </p>
          <div
            className={`relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border ${isDetail ? "mt-2" : "mt-3"}`}
            style={{ borderColor: `${palette.primary}33`, backgroundColor: palette.surface }}
          >
            <div
              className="flex items-center gap-2 border-b px-3 py-2"
              style={{ borderColor: `${palette.primary}22` }}
            >
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: palette.primary }} />
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${palette.primary}55` }} />
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${palette.primary}33` }} />
              </div>
              <div
                className="h-1.5 flex-1 rounded-full"
                style={{ backgroundColor: `${palette.primary}18` }}
              />
            </div>
            <div
              className="flex items-center gap-3 border-b px-3 py-2"
              style={{ borderColor: `${palette.primary}18` }}
            >
              {["Home", "Products", "Export", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-[0.55rem] font-medium uppercase tracking-[0.12em]"
                  style={{ color: item === "Products" ? palette.primary : palette.muted }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div
              className="relative min-h-0 flex-1 overflow-hidden"
              style={{
                background: `radial-gradient(circle at 18% 28%, ${productTiles[0].tone}66 0%, transparent 42%), radial-gradient(circle at 72% 22%, ${productTiles[1].tone}55 0%, transparent 38%), linear-gradient(165deg, ${palette.surface} 0%, ${palette.background} 100%)`,
              }}
            >
              <div
                className={`relative z-10 flex h-full flex-col ${isDetail ? "justify-start gap-2.5 p-2.5 md:p-3" : "justify-between p-3 md:p-4"}`}
              >
                <div>
                  <p
                    className="text-[0.58rem] font-medium uppercase tracking-[0.16em]"
                    style={{ color: palette.muted }}
                  >
                    Global export · Trading
                  </p>
                  <p
                    className={`font-display leading-tight tracking-[-0.03em] ${isDetail ? "mt-0.5 text-[clamp(0.85rem,1.6vw,1.1rem)]" : "mt-1 text-[clamp(1rem,2vw,1.35rem)]"}`}
                    style={{ color: palette.text }}
                  >
                    Quality products for international markets
                  </p>
                </div>
                <div className={`grid grid-cols-4 ${isDetail ? "gap-1" : "gap-1.5"}`}>
                  {productTiles.map((tile) => (
                    <div
                      key={tile.label}
                      className="overflow-hidden rounded-md border"
                      style={{ borderColor: `${palette.primary}22` }}
                    >
                      <div className="aspect-[4/3]" style={{ backgroundColor: tile.tone }} />
                      <p
                        className="px-1.5 py-1 text-[0.52rem] font-medium uppercase tracking-[0.1em]"
                        style={{ color: palette.muted, backgroundColor: `${palette.surface}ee` }}
                      >
                        {tile.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 50%, ${palette.primary}77 100%)`,
                }}
              />
              <p
                className="absolute bottom-3 right-3 font-display text-[0.72rem] tracking-[-0.02em]"
                style={{ color: palette.surface }}
              >
                Everoot International
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full min-h-full flex-col justify-between overflow-hidden p-6 md:p-8"
      style={{ backgroundColor: palette.background }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(${palette.primary} 1px, transparent 1px), linear-gradient(90deg, ${palette.primary} 1px, transparent 1px)`,
          backgroundSize: isCompact ? "48px 48px" : "64px 64px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-10 top-8 h-40 w-40 rounded-full border"
        style={{ borderColor: `${palette.accent}55`, backgroundColor: `${palette.surface}` }}
      />
      <div className="relative z-10">
        <p
          className="text-[0.68rem] font-medium uppercase tracking-[0.18em]"
          style={{ color: palette.muted }}
        >
          {category}
        </p>
      </div>
      <div className="relative z-10 max-w-md">
        <p
          className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.04em]"
          style={{ color: palette.primary }}
        >
          {name}
        </p>
        <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: palette.muted }}>
          {category}
        </p>
      </div>
      <div className="relative z-10 space-y-3">
        <div className="h-px w-full" style={{ backgroundColor: `${palette.primary}33` }} />
        <p
          className="text-[0.68rem] font-medium uppercase tracking-[0.22em]"
          style={{ color: palette.secondary }}
        >
          Export · Trading · Digital experience
        </p>
        <div className="h-px w-2/3" style={{ backgroundColor: `${palette.accent}66` }} />
      </div>
    </div>
  );
}

function CipherfabVisual({ name, category, config, layout }: VariantProps) {
  const { palette } = config;
  const isDetail = layout === "detail";
  const isDense = layout === "showcase" || isDetail;

  if (isDense) {
    const shellPadding = isDetail ? "p-3 md:p-4" : "p-4 md:p-5";
    const titleClass = isDetail
      ? "mt-1.5 font-display text-[clamp(1.45rem,3.2vw,2.35rem)] leading-[0.98] tracking-[-0.03em]"
      : "mt-2 font-display text-[clamp(1.65rem,3.8vw,2.75rem)] leading-[0.98] tracking-[-0.03em]";

    return (
      <div
        className="relative h-full min-h-full overflow-hidden"
        style={{ backgroundColor: palette.background, color: palette.text }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${palette.primary} 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, ${palette.primary} 0 1px, transparent 1px 24px)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: `linear-gradient(125deg, transparent 0%, ${palette.primary} 50%, transparent 100%)`,
          }}
        />
        <div className={`relative z-10 flex h-full flex-col ${shellPadding}`}>
          <div className="flex items-center justify-between gap-3">
            <p
              className="text-[0.62rem] font-medium uppercase tracking-[0.18em]"
              style={{ color: palette.muted }}
            >
              {category}
            </p>
            <span
              className="rounded-full px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.14em]"
              style={{ backgroundColor: `${palette.primary}22`, color: palette.primary }}
            >
              In development
            </span>
          </div>
          <p className={titleClass}>{name}</p>
          <div
            className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border ${isDetail ? "mt-2" : "mt-3"}`}
            style={{
              borderColor: `${palette.primary}44`,
              backgroundColor: `${palette.surface}cc`,
            }}
          >
            <div
              className="flex items-center gap-2 border-b px-3 py-2"
              style={{ borderColor: `${palette.primary}33` }}
            >
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: palette.accent }} />
              <div className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: `${palette.primary}33` }} />
              <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: `${palette.primary}22` }} />
            </div>
            <div className="flex min-h-0 flex-1">
              <div
                className="w-[22%] shrink-0 border-r p-2"
                style={{ borderColor: `${palette.primary}28`, backgroundColor: `${palette.background}88` }}
              >
                <div className="space-y-2">
                  {[1, 0.72, 0.85, 0.6].map((width, index) => (
                    <div
                      key={index}
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${width * 100}%`,
                        backgroundColor: index === 0 ? palette.primary : `${palette.primary}33`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className={`flex min-w-0 flex-1 flex-col ${isDetail ? "gap-2 p-2.5" : "p-3"}`}>
                <div className={`flex gap-2 ${isDetail ? "" : "mb-3"}`}>
                  <div
                    className={`${isDetail ? "h-12" : "h-16"} flex-[1.4] rounded-md border`}
                    style={{ borderColor: `${palette.primary}33`, backgroundColor: `${palette.primary}18` }}
                  />
                  <div
                    className={`${isDetail ? "h-12" : "h-16"} flex-1 rounded-md border`}
                    style={{ borderColor: `${palette.primary}28`, backgroundColor: `${palette.background}66` }}
                  />
                </div>
                <div className={`flex flex-col gap-2 ${isDetail ? "flex-none" : "flex-1"}`}>
                  {[0.95, 0.82, 0.88, 0.7].map((width, index) => (
                    <div
                      key={index}
                      className={`${isDetail ? "h-1.5" : "h-2"} rounded-full`}
                      style={{ width: `${width * 100}%`, backgroundColor: `${palette.primary}24` }}
                    />
                  ))}
                </div>
                <div className={`flex gap-2 ${isDetail ? "pt-1" : "mt-auto pt-2"}`}>
                  <div className={`${isDetail ? "h-6" : "h-7"} flex-1 rounded-md`} style={{ backgroundColor: palette.primary }} />
                  <div className={`${isDetail ? "h-6 w-12" : "h-7 w-14"} rounded-md`} style={{ backgroundColor: `${palette.accent}55` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full min-h-full flex-col justify-between overflow-hidden p-6 md:p-8"
      style={{ backgroundColor: palette.background, color: palette.text }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(125deg, transparent 0%, ${palette.primary} 50%, transparent 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${palette.primary} 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, ${palette.primary} 0 1px, transparent 1px 28px)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between gap-4">
        <p
          className="text-[0.68rem] font-medium uppercase tracking-[0.18em]"
          style={{ color: palette.muted }}
        >
          {category}
        </p>
        <span
          className="rounded-full px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]"
          style={{ backgroundColor: `${palette.primary}22`, color: palette.primary }}
        >
          In development
        </span>
      </div>
      <div className="relative z-10">
        <p className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.98] tracking-[-0.03em]">
          {name}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed md:text-base" style={{ color: palette.muted }}>
          {category}
        </p>
      </div>
      <div className="relative z-10 flex gap-2">
        <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: palette.primary }} />
        <div className="h-1 w-16 rounded-full" style={{ backgroundColor: palette.accent }} />
        <div className="h-1 w-8 rounded-full" style={{ backgroundColor: `${palette.primary}55` }} />
      </div>
    </div>
  );
}

function YogaVisual({ name, category, config, layout }: VariantProps) {
  const { palette, image, logo } = config;
  const isDetail = layout === "detail";
  const isShowcase = layout === "showcase";
  const isHero = layout === "hero";
  if (image && (isShowcase || isDetail || isHero)) {
    const heroImage = image;
    const shellPadding = isHero ? "p-3" : isDetail ? "p-3 md:p-4" : "p-4 md:p-5";
    const headlineClass = isHero
      ? "mt-3 font-display text-[clamp(1.05rem,2.4vw,1.55rem)] leading-[1.06] tracking-[-0.03em]"
      : isDetail
        ? "mt-3 font-display text-[clamp(1.15rem,2.6vw,1.75rem)] leading-[1.06] tracking-[-0.03em]"
        : "mt-4 font-display text-[clamp(1.35rem,3vw,2.05rem)] leading-[1.06] tracking-[-0.03em]";
    const offerings = [
      "Yoga Therapy",
      "Corporate Wellness",
      "Sound Healing",
      "The Rest Reset Method",
    ];

    return (
      <div
        className="relative flex h-full min-h-full flex-col overflow-hidden"
        style={{ backgroundColor: palette.background }}
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover object-[center_22%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 640px"
            priority={isDetail}
          />
          <div className="relative z-10 flex h-full flex-col">
            <div
              className={`flex items-center justify-between gap-2 border-b ${shellPadding}`}
              style={{
                borderColor: `${palette.accent}33`,
                backgroundColor: `${palette.surface}f2`,
              }}
            >
              <div className="flex min-w-0 items-center gap-2">
                {logo ? (
                  <div className={`relative shrink-0 ${isHero ? "h-6 w-6" : "h-7 w-7"}`}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="28px"
                    />
                  </div>
                ) : null}
                <span
                  className="truncate text-[0.62rem] font-medium tracking-[-0.01em] md:text-[0.68rem]"
                  style={{ color: palette.text }}
                >
                  {name}
                </span>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                {["Home", "Services", "Contact"].map((item) => (
                  <span
                    key={item}
                    className="text-[0.52rem] font-medium uppercase tracking-[0.12em] md:text-[0.55rem]"
                    style={{ color: palette.muted }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={`flex min-h-0 flex-1 flex-col ${shellPadding} pt-0`}>
              <p className={headlineClass} style={{ color: palette.text }}>
                Transforming wellness in Corporates &amp; Communities.
              </p>
              {!isHero ? (
                <p
                  className={`max-w-[18rem] leading-relaxed ${isDetail ? "mt-2 text-[0.68rem]" : "mt-3 text-[0.74rem]"}`}
                  style={{ color: palette.muted }}
                >
                  Yoga Therapy, breathwork, meditation, and sound healing for individuals and
                  workplace programmes.
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {!isHero ? (
          <div
            className={`relative z-10 shrink-0 border-t ${isDetail ? "p-2.5 md:p-3" : "p-3 md:p-4"}`}
            style={{
              borderColor: `${palette.accent}33`,
              backgroundColor: palette.surface,
            }}
          >
            <p
              className="text-[0.52rem] font-medium uppercase tracking-[0.14em] md:text-[0.55rem]"
              style={{ color: palette.muted }}
            >
              Our offerings
            </p>
            <div className={`mt-2 grid grid-cols-2 ${isDetail ? "gap-1.5" : "gap-2"}`}>
              {offerings.slice(0, isDetail ? 2 : 4).map((offering) => (
                <p
                  key={offering}
                  className={`leading-snug ${isDetail ? "text-[0.58rem]" : "text-[0.62rem]"}`}
                  style={{ color: palette.text }}
                >
                  {offering}
                </p>
              ))}
            </div>
            {isShowcase ? (
              <p
                className="mt-2 border-l-2 pl-2.5 text-[0.58rem] italic leading-snug md:text-[0.62rem]"
                style={{ borderColor: palette.primary, color: palette.muted }}
              >
                &ldquo;A calm, grounded way of guiding the session that made it easy to relax and stay
                present.&rdquo;
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full min-h-full flex-col justify-start gap-4 overflow-hidden p-5 md:p-6"
      style={{ backgroundColor: palette.background }}
    >
      <p
        className="text-[0.68rem] font-medium uppercase tracking-[0.18em]"
        style={{ color: palette.muted }}
      >
        {category}
      </p>
      <p
        className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.02] tracking-[-0.03em]"
        style={{ color: palette.text }}
      >
        {name}
      </p>
    </div>
  );
}

export function ProjectVisualVariant(props: VariantProps) {
  switch (props.config.variant) {
    case "jaya":
      return <JayaVisual {...props} />;
    case "everoot":
      return <EverootVisual {...props} />;
    case "cipherfab":
      return <CipherfabVisual {...props} />;
    case "yoga":
      return <YogaVisual {...props} />;
    default:
      return null;
  }
}
