"use client";

import { SectionInfo } from "./components/sections/SectionInfo";
import { SectionServices } from "./components/sections/SectionServices";
import { SectionMyWorks } from "./components/sections/SectionMyWorks";
import { SectionInvite } from "./components/sections/SectionInvite";
import { SectionContactForMe } from "./components/sections/SectionContactForMe";
import { SectionCompanies } from "./components/sections/SectionCompanies";
import { SectionPresentation } from "./components/sections/SectionPresentation";
import { SectionTestimonial } from "./components/sections/SectionTestimonial";

export default function Home() {
  return (
    <main className="grid grid-cols-subgrid col-span-full gap-y-40 ">
      <SectionPresentation />
      <SectionInfo />
      <SectionServices />
      <SectionMyWorks />
      <SectionCompanies />
      <SectionInvite />
      <SectionTestimonial />
      <SectionContactForMe />
    </main>
  );
}
