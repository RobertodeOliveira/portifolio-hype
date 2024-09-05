import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import { listWorks } from "./data";

export const SectionServices = () => {
  return (
    <section>
      <SectionHeader title="My Service" />
      {listWorks.map((item, index) => (
        <div
          key={index}
          className="bg-white h-80 w-full p-8 rounded-md col-span-3 md:col-span-4 lg:col-span-3"
        >
          <Image
            src={item.icon}
            width={40}
            height={40}
            alt=""
            className="hover:text-pink"
          />
          <div className="mt-20">
            <span className="text-black text-3xl">{item.text}</span>
            <hr className="w-[80px] border-b-2 border-pink mt-4 mb-6" />
            <div>
              <Image
                src="/icons/arrow-right-black.svg"
                width={40}
                height={24}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
