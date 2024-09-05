import Image from "next/image";
import { CardProfile } from "./components/CardProfile";
import { SectionHeader } from "../SectionHeader";
import { ContactFormValues } from "../SectionContactForMe/validation";
import { API_URL } from "../../../../../api/api";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { testimonials } from "./data";

export const SectionTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelectIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <SectionHeader title="Testimonial" />
      <div className="grid grid-cols-subgrid col-span-3 gap-y-4">
        {testimonials.map(({ activity, company, name }, index) => (
          <CardProfile
            key={index}
            onClick={() => onSelectIndex(index)}
            description={`${activity} at`}
            name={name}
            company={company}
            className={clsx("relative col-span-full", {
              "lg:after:absolute lg:after:bg-white lg:after:size-6 after:rounded-sm lg:after:left-full lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:rotate-45 lg:after:translate-x-full":
                activeIndex === index,
            })}
          />
        ))}
      </div>
      <blockquote className="isolate col-start-4 col-span-full ml-4 bg-white h-full p-12 relative rounded text-black flex justify-between">
        <div>
          <div className="flex gap-1 items-center">
            <img src="/image/star.png" width={20} height={20} alt="" />
            5.0 Start Rating
            </div>
          <p className="text-2xl">"{testimonials[activeIndex]?.comment}</p>
        </div>
        <Image
          className="-mt-6 absolute right-4 -z-10"
          src="/image/Quote.svg"
          width={95}
          height={75}
          alt="quote image"
        />
      </blockquote>
    </section>
  );
};
