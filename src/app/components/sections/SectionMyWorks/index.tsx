import { CardWork } from "../../CardWork";
import { SectionHeader } from "../SectionHeader";
import { work } from "./data";


export const SectionMyWorks = () => {
  return (
    <section id="section-works">
      <SectionHeader title="My Selected Work" />
      {work.map(({ name, href, image }, index) => (
        <CardWork
          className="col-span-full md:col-span-4"
          key={index}
          href={href}
          image={image}
          text={name}
        />
      ))}
    </section>
  );
};