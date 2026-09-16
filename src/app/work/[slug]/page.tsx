import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content/projects";
import { CaseStudyDetail } from "@/components/work/case-study-detail";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Case study`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Clyver Digital`,
      description: project.description,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  return <CaseStudyDetail project={project} />;
}
