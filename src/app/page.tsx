import { SectionInfo } from "./components/sections/SectionInfo";
import { SectionServices } from "./components/sections/SectionServices";
import { SectionMyWorks } from "./components/sections/SectionMyWorks";
import { SectionInvite } from "./components/sections/SectionInvite";
import { SectionTestimonial } from "./components/SectionTestimonial";
import { SectionContactForMe } from "./components/SectionContactForMe";
import { SectionCompanies } from "./components/sections/SectionCompanies";
import { SectionPresentation } from "./components/sections/SectionPresentation";

export default function Home() {
  return (
    <>
      <main className="w-full items-center">
        <SectionPresentation />
        <SectionInfo />
        <SectionServices />
        <SectionMyWorks />
        <SectionCompanies />
        <SectionInvite />
        <SectionTestimonial />
        <SectionContactForMe />
      </main>
    </>
  );
}
