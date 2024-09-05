import Image from "next/image"
import { CardPersonalInformation } from "../CardPersonalInformation"
import { Footer } from "../Footer"

export const CardPersonalInfo = () => {
    return ( 
        <div className="relative p-12 mt-6 lg:mt-0 bg-white lg:max-w-lg w-full rounded-lg">
          <Image className="absolute -right-20 -mt-[80px]" src="/image/dot.svg" width={152} height={68} alt=""/> 
          <h3 className="text-3xl font-medium text-black">Get in Touch</h3>
          <div className="mt-6 flex flex-col gap-5">
          <CardPersonalInformation icon="/icons/map-pin.svg" text="Rua Deocalino de Melo, Numero 300, São Gonçalo - 000000, Brasil" />
          <CardPersonalInformation icon="/icons/message.svg" text="robertomelo287@gmail.com" />       
          <CardPersonalInformation icon="/icons/phone.svg" text="+55 (21) 9 6549-7282" />
          </div>
          <Footer />
        </div>
    )
}