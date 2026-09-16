import type { VisualVariant } from "@/lib/content/project-visuals";
import { getProjectVisual } from "@/lib/content/project-visuals";
import { ProjectVisualVariant } from "@/components/work/project-visual-variants";

type ProjectVisualProps = {
  name: string;
  category: string;
  visualVariant: VisualVariant;
  variant?: "hero" | "card" | "detail" | "showcase";
  embedded?: boolean;
};

export function ProjectVisual({
  name,
  category,
  visualVariant,
  variant = "card",
  embedded = false,
}: ProjectVisualProps) {
  const config = getProjectVisual(visualVariant);

  const heightClass =
    variant === "showcase"
      ? "aspect-[4/3] w-full min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem]"
      : variant === "hero"
        ? "aspect-[16/10] w-full min-h-[11rem] sm:min-h-[13rem] md:min-h-[14rem]"
        : variant === "detail"
          ? "h-[13.5rem] w-full sm:h-[15rem] md:h-[18rem] lg:h-[21rem]"
          : "min-h-[14rem] md:min-h-[18rem] lg:min-h-[20rem]";

  const frameClass = embedded
    ? "rounded-none border-0 border-b border-line"
    : "rounded-[1.35rem] border border-line";

  return (
    <div
      className={`relative isolate overflow-hidden ${frameClass} ${heightClass}`}
      aria-hidden="true"
    >
      <ProjectVisualVariant
        name={name}
        category={category}
        config={config}
        layout={variant === "showcase" ? "showcase" : variant}
      />
    </div>
  );
}
