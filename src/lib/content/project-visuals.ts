export type VisualVariant = "jaya" | "everoot" | "cipherfab" | "yoga";

export type ProjectVisualConfig = {
  variant: VisualVariant;
  palette: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    muted: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  logo?: {
    src: string;
    alt: string;
  };
};

export const projectVisuals: Record<VisualVariant, ProjectVisualConfig> = {
  jaya: {
    variant: "jaya",
    palette: {
      background: "#f7f5f1",
      surface: "#ecfdf3",
      primary: "#16a34a",
      secondary: "#15803d",
      accent: "#86efac",
      text: "#14532d",
      muted: "#4d7c59",
    },
    image: {
      src: "https://www.jayaspace475.com/hero.webp",
      alt: "Jaya's Space co-working studio — hero imagery from the live project site",
    },
  },
  everoot: {
    variant: "everoot",
    palette: {
      background: "#f7f3eb",
      surface: "#eef4ea",
      primary: "#3D4F41",
      secondary: "#2f3d32",
      accent: "#8fa888",
      text: "#1f2921",
      muted: "#5c6b5e",
    },
  },
  cipherfab: {
    variant: "cipherfab",
    palette: {
      background: "#1C1A27",
      surface: "#252336",
      primary: "#4D7CFE",
      secondary: "#3d6ce8",
      accent: "#7880eb",
      text: "#f4f6ff",
      muted: "#a8b0d9",
    },
  },
  yoga: {
    variant: "yoga",
    palette: {
      background: "#F9F5F3",
      surface: "#FEFDFE",
      primary: "#BC7F6A",
      secondary: "#356483",
      accent: "#82968A",
      text: "#445252",
      muted: "#82968A",
    },
    image: {
      src: "https://www.yogawithshabana.com/bg-yoga.jpg",
      alt: "Yoga with Shabana website hero background photography",
    },
    logo: {
      src: "https://www.yogawithshabana.com/LogoMain.png",
      alt: "Yoga with Shabana logo",
    },
  },
};

export function getProjectVisual(variant: VisualVariant): ProjectVisualConfig {
  return projectVisuals[variant];
}
