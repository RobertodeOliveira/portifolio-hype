/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { SocialMedias } from "../../SocialMedias"
import { Button } from "../../ui/Button"

export const SectionPresentation = () => {
   return (
      <section className="layout-grid h-full lg:h-[90dvh] lg:grid-rows-4 mb-24">
        <div className="col-span-8 col-start-1 lg:row-start-2 row-span-2 z-10 row-start-1">
            <h1 className="text-6xl lg:text-[80px] leading-tight">
              Hello, I’m Roberto, a <span className="text-[#7D00FF]">Software Engineer</span>.
            </h1>
          <p className="text-gray-500 max-w-2xl">
            Hi! I'm Roberto, a Frontend Developer. I'm passionate about creating intuitive and functional user interfaces, always looking for new opportunities to learn and grow. I love working in teams, sharing knowledge, and finding innovative solutions. I'm constantly refining my skills to deliver the best in every project.
          </p>
          <div className="max-w-80 mt-8 flex gap-4">
            <Button variant="primary">HIRE ME</Button>
            <Button variant="secondary">VIEW WORK</Button>
          </div>
        </div>
          <div className="col-span-7 mt-4 lg:mt-0 lg:row-start-4 lg:col-span-3 row-start-3 self-center">
            <SocialMedias />
          </div>
        <div className="relative col-start-6 col-span-full row-span-full">
          <Image fill className="hidden lg:grid shadow-[300px_-70px_0px_70px_#7D00FF] translate-x-10 object-cover" src="/image/profile.jpg" alt=""/> 
        </div>
      </section> 
   )
}