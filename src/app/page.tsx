import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Philosophy } from "@/components/sections/philosophy";
import { Solutions } from "@/components/sections/solutions";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { WhyClyver } from "@/components/sections/why-clyver";
import { About } from "@/components/sections/about";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Philosophy />
      <Solutions />
      <Process />
      <CaseStudies />
      <WhyClyver />
      <About />
      <FinalCta />
    </>
  );
}
