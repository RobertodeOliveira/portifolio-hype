import { SectionHeader } from "../SectionHeader"
import { ReactNode } from "react"
import Image from "next/image"

type ListWorks = {
  icon: string
  text: ReactNode
  alt: string
} 


const listWorks: ListWorks[] = [  
  {
    icon: '/icons/code.svg',
    text: <p>Front End Development</p>,
    alt: 'Icon Code'
  }
]

export const SectionServices = () => {
  return ( 
    <section id="section-services" className="w-full text my-16">
      <SectionHeader title="My Service" />
      <div className="mt-12 flex items-center justify-center gap-6 w-full  max-h-[350px]">
        {listWorks.map((item, index) => {
          return ( 
                <div key={index} className="bg-white h-80 w-full max-w-[312px] p-8 rounded-md">
                  <div>
                    <Image src={item.icon} width={40} height={40} alt={item.alt} className="hover:text-pink"/>
                  </div>
                  <div className="mt-20">
                    <span className="text-black text-3xl">{item.text}</span>
                    <div className="w-[80px] border-b-2 border-[#ED1CA6] mt-4 mb-6"></div>
                      <Image src='/icons/arrow-right-black.svg' width={40} height={24} alt=""/>
                  </div>
                </div>
          )
        } )}
      </div>
    </section>
  )
}