import { CardWork } from "../../CardWork";
import { SectionHeader } from "../SectionHeader";

export const SectionMyWorks = () => {
  return (
    <section id="section-works">
      <SectionHeader title="My Selected Work" />
      {Array.from(Array(3)).map((_, index) => (
        <CardWork
          className="col-span-full md:col-span-4"
          key={index}
          image="/image/edguard.svg"
          text="E-learning Website"
        />
      ))}
    </section>
  );
};
