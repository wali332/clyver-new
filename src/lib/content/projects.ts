import type { VisualVariant } from "@/lib/content/project-visuals";

export type ProjectStatus = "in-development" | "completed" | "ongoing";

export type CaseStudyContent = {
  intro: string;
  challenge: string;
  approach: string;
  thinking: string;
  solution: string;
  outcome: string;
  outcomeLabel?: "Outcome" | "Status";
  technology?: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  status?: ProjectStatus;
  description: string;
  summary: string;
  involvement: string[];
  note?: string;
  accent: string;
  visualVariant: VisualVariant;
  website: string;
  caseStudy?: CaseStudyContent;
};

export const projects: Project[] = [
  {
    slug: "cipherfab",
    name: "CipherFAB",
    category: "Manufacturing / Digital Platform",
    status: "in-development",
    description: "A digital platform for a manufacturing business",
    summary: "A manufacturing digital platform—currently in active development.",
    involvement: [
      "Research",
      "Content",
      "UX/UI",
      "Interface design",
      "Development",
    ],
    accent: "#2C3E50",
    visualVariant: "cipherfab",
    website: "https://cipherfab.com",
    caseStudy: {
      intro:
        "CipherFAB is a manufacturing-focused digital platform currently in development. Clyver is working across product experience, UX/UI, interface design, and engineering to translate the business requirements into a structured digital product.",
      challenge:
        "CipherFAB needed more than a conventional marketing website.\n\nThe project required a digital experience capable of presenting a manufacturing business clearly while providing the foundation for a broader platform.",
      approach:
        "Clyver began by understanding the business requirements and translating them into the product structure, interface hierarchy, and digital experience.\n\nThe work combines product thinking, UX/UI design, and engineering rather than treating the project as a purely visual website exercise.",
      thinking:
        "A manufacturing business can have a large amount of information, processes, and operational context behind what customers see.\n\nThe challenge was to create an experience that could communicate the business clearly without allowing that complexity to overwhelm the interface.\n\nThis shaped the work around clear information hierarchy, structured product experience, and a foundation that could support the platform as development continues.",
      solution:
        "Clyver is designing and developing CipherFAB as a digital platform, combining product experience, UX/UI, and engineering into a single implementation.\n\nThe project is currently in active development.",
      outcome:
        "Currently in active development.\n\nProject outcomes are not yet publicly published.",
      outcomeLabel: "Status",
    },
  },
  {
    slug: "everoot-international",
    name: "Everoot International",
    category: "Export / Trading",
    description: "Digital product work for an export and trading business",
    summary: "Digital product work for an export and trading business.",
    involvement: [
      "Business discovery",
      "Design direction",
      "Content",
      "UX/UI",
      "Internal tooling concept",
      "Admin dashboard",
      "Inquiry workflow",
      "Development",
    ],
    accent: "#3D4F41",
    visualVariant: "everoot",
    website: "https://everootinternational.com",
    caseStudy: {
      intro:
        "Everoot International is an export and trading business. Clyver worked across business discovery, design direction, content, UX/UI, internal tooling concepts, and development.",
      challenge:
        "Everoot needed a stronger digital experience for its export and trading business, with a more structured way to present products and support business inquiries.",
      approach:
        "Clyver began with business discovery and design direction, then translated the requirements into the customer-facing digital experience and supporting internal workflows.\n\nThe work was considered as a connected system rather than as a standalone website.",
      thinking:
        "The project needed to serve two sides of the business:\n\nCustomers needed a clearer way to understand the company's products and make inquiries.\n\nThe business needed supporting tools to manage products and inquiries behind the experience.\n\nThis shaped the work beyond the public-facing website.",
      solution:
        "Clyver designed and developed the digital experience alongside an admin dashboard and inquiry workflow, connecting the customer-facing experience with the supporting business processes.",
      outcome: "Project outcomes are not publicly published.",
      outcomeLabel: "Outcome",
    },
  },
  {
    slug: "jaya-space",
    name: "Jaya Space",
    category: "Business / Digital Experience",
    description:
      "A digital experience with customer slot booking for a co-working business.",
    summary: "A co-working digital experience shaped by the client's design direction.",
    note: "Design direction was strongly influenced by the client's requested direction.",
    involvement: [
      "Design",
      "UX/UI",
      "Customer booking flow",
      "Slot booking experience",
      "Development",
    ],
    accent: "#4A4540",
    visualVariant: "jaya",
    website: "https://jayaspace475.com",
    caseStudy: {
      intro:
        "Jaya Space needed a digital experience that represented its co-working business while also giving customers a clear way to book available slots. Clyver worked across design, UX/UI, the customer booking flow, and development within the client's requested design direction.",
      challenge:
        "Jaya Space needed a digital experience for its co-working business that could communicate the offering clearly and guide customers toward booking a slot.",
      approach:
        "Clyver worked across design, UX/UI, and development, translating the client's requested visual direction into a coherent digital experience and customer booking journey.",
      thinking:
        "The experience needed to do more than present information. Customers needed a clear path from understanding the co-working offering to taking action and booking a slot.",
      solution:
        "Clyver designed and developed the Jaya Space digital experience, including the customer-facing slot booking flow, within the client's requested design direction.",
      outcome:
        "Documented Clyver involvement as listed above. Project outcomes are not published.",
      outcomeLabel: "Status",
    },
  },
  {
    slug: "yoga-with-shabana",
    name: "Yoga With Shabana",
    category: "Wellness / Digital Experience",
    description: "A premium digital experience for a wellness brand.",
    summary:
      "A premium wellness digital experience across visual design, content structure, and development.",
    involvement: ["UX/UI", "Visual design", "Content structure", "Development"],
    accent: "#5C4B51",
    visualVariant: "yoga",
    website: "https://yogawithshabana.com",
    caseStudy: {
      intro:
        "Yoga With Shabana needed a digital experience that could communicate a distinctive wellness practice while presenting its services, credibility, and expertise in a clear and premium way. Clyver worked across the digital experience, UX/UI, content structure, and development.",
      challenge:
        "The challenge was to create a digital experience that felt as considered as the wellness practice itself.\n\nThe site needed to communicate the brand clearly, make its range of offerings easy to understand, establish trust through expertise and social proof, and guide visitors toward getting in touch.",
      approach:
        "Clyver approached the experience around clarity, visual restraint, and strong content hierarchy.\n\nThe design needed enough personality to feel distinctive while remaining calm and credible, allowing the practitioner, offerings, and supporting proof to remain the focus.",
      thinking:
        "For a personal wellness brand, the website is part of the first impression.\n\nRather than treating the site as a collection of service pages, the experience was structured to connect brand, expertise, offerings, and social proof into a single journey.\n\nThe visual language was deliberately restrained so the experience could feel premium without relying on unnecessary visual effects.",
      solution:
        "Clyver created a cohesive digital experience that combines premium visual direction with clear service architecture and conversion-focused content.\n\nThe experience brings together the brand story, wellness offerings, expertise, testimonials, and contact journey within a consistent visual system.",
      outcome: "Project outcomes are not publicly published.",
      outcomeLabel: "Outcome",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjects(): Project[] {
  return projects.filter((project) => project.caseStudy);
}
