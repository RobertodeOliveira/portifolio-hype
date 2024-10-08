import Image from "next/image";
import { CardPersonalInformation } from "../CardPersonalInformation";
import { Footer } from "../Footer";

export const CardPersonalInfo = () => {
  return (
    <div className="relative h-full p-12 bg-white rounded-lg after:absolute after:content-[url('/image/dot.svg')] after:top-0 after:right-0 after:translate-x-1/2 after:-translate-y-1/2">
      <h3 className="text-3xl font-medium text-black">Get in Touch</h3>
      <div className="mt-6 flex flex-col gap-5">
        <CardPersonalInformation
          icon="/icons/map-pin.svg"
          text="Rua Deocalino de Melo, Numero 300, São Gonçalo - 000000, Brasil"
        />
        <CardPersonalInformation
          icon="/icons/message.svg"
          text="robertomelo287@gmail.com"
        />
        <CardPersonalInformation
          icon="/icons/phone.svg"
          text="+55 (21) 9 6549-7282"
        />
      </div>
      <Footer />
    </div>
  );
};
