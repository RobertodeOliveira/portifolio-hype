import Image from "next/image"
import { SectionHeader } from "../sections/SectionHeader"
import { CardProfile } from "./components/CardProfile"

export const SectionTestimonial = () => {
  return ( 
    <div className="py-24">
      <SectionHeader title="Testimonial" />

      <div className="flex flex-col lg:flex-row mt-9 justify-between gap-11">
        <div className="grid gap-2 md:grid-cols-2 grid-cols-1 lg:flex lg:flex-col lg:gap-1 lg:max-w-80 w-full">
          <CardProfile name="Roberto" description="Front End Develop" company="Freelance"/>
          <CardProfile name="Roberto" description="Front End Develop" company="Freelance"/>
          <CardProfile name="Roberto" description="Front End Develop" company="Freelance"/>
          <CardProfile name="Roberto" description="Front End Develop" company="Freelance"/>
        </div>
      <div className="w-full">
        <div className="bg-white max-w-[960px] w-full h-72 p-12 rounded relative">
          <div className="p-1 ml-[-62px] -mt-4 bg-white w-7 h-7 rounded-tl-md -rotate-45 absolute"></div>
          <div className="text-black flex justify-between">
            teste
            <Image className="-mt-6" src="/image/Quote.svg" width={95} height={75} alt="quote image"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}