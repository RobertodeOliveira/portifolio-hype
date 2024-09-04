import Image from "next/image"

export const SectionPresentation = () => {
   return (
      <section className="layout-grid h-[90dvh] grid-rows-4 mb-24">
        <div className="col-span-8 col-start-1 row-start-2 row-span-2 z-10">
            <h1 className="text-[80px] leading-tight">
              Hello, I’m Roberto, a <span className="text-[#7D00FF]">Software Engineer</span>.
            </h1>
          <p className="text-gray-500">
            Front end Developer based in Brazil.
            Over the past 27 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.
          </p>
        </div>
          <div className="row-start-4 self-center">
            Social Media
          </div>
        <div className="relative col-start-6 col-span-full row-span-full">
          <Image fill className="shadow-[300px_-70px_0px_70px_#7D00FF] translate-x-10 object-cover" src="/image/profile.jpg" alt=""/> 
        </div>
      </section> 
   )
}