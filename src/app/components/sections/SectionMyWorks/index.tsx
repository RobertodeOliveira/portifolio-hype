import { CardWork } from "../../CardWork"
import { SectionHeader } from "../SectionHeader"

export const SectionMyWorks = () => {
  return ( 
    <div className="w-full my-16">
      <SectionHeader title="My Selected Work" />
      <div className="mt-12 gap-6 w-full grid lg:grid-cols-3 grid-rows-2 sm:grid-cols-2 ">
        <CardWork image="/image/edguard.svg" text="E-learning Website" />
        <CardWork image="/image/learning.svg" text="E-learning Website" />
        <CardWork image="/image/agency.svg" text="E-learning Website" />
        <CardWork image="/image/beeryblog.svg" text="E-learning Website" />
        <CardWork image="/image/educare.svg" text="E-learning Website" />
        <CardWork image="/image/blog.svg" text="E-learning Website" />
      </div>
    </div>
  )
}