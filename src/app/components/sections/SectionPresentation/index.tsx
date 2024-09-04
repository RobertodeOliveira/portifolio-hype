/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { SocialMedias } from "../../SocialMedias"

export const SectionPresentation = () => {
   return (
      <section className="layout-grid h-[90dvh] grid-rows-4 mb-24">
        <div className="col-span-8 col-start-1 row-start-2 row-span-2 z-10">
            <h1 className="text-[80px] leading-tight">
              Hello, I’m Roberto, a <span className="text-[#7D00FF]">Software Engineer</span>.
            </h1>
          <p className="text-gray-500 max-w-2xl">
            Hi! I'm Roberto, a Frontend Developer. I'm passionate about creating intuitive and functional user interfaces, always looking for new opportunities to learn and grow. I love working in teams, sharing knowledge, and finding innovative solutions. I'm constantly refining my skills to deliver the best in every project.
          </p>
        </div>
          <div className="row-start-4 col-span-3 self-center">
            <SocialMedias />
          </div>
        <div className="relative col-start-6 col-span-full row-span-full">
          <Image fill className="shadow-[300px_-70px_0px_70px_#7D00FF] translate-x-10 object-cover" src="/image/profile.jpg" alt=""/> 
        </div>
      </section> 
   )
}