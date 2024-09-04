import Image from "next/image"
import { CardCompany } from "../../CardCompany"

export const SectionCompanies = () => { 
  return ( 
    <div className="lg:flex text-3xl justify-between my-24">
      <p className="max-w-72">I worked with <span className="text-pink">289+</span> Companies all over the World.</p>
      <div className="ml-4 h-fill flex gap-6 flex flex-wrap">
      <CardCompany>
        <Image src='/image/youtube.svg' width={115} height={24} alt="Logo youtube"/>
      </CardCompany>
      <CardCompany>
        <Image src='/image/google.svg' width={115} height={24} alt="Logo youtube"/>
      </CardCompany>
      <CardCompany>
        <Image src='/image/adobe.svg' width={115} height={24} alt="Logo youtube"/>
      </CardCompany>
      <CardCompany>
        <Image src='/image/sketch.svg' width={115} height={24} alt="Logo youtube"/>
      </CardCompany>
      <CardCompany>
        <Image src='/icons/arrow-right-purple.svg' width={40} height={24} alt="Logo youtube"/>
      </CardCompany>
      </div>
    </div>
  )
}