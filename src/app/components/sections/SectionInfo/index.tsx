import Image from "next/image";
import { Button } from "../../ui/Button";

export const SectionInfo = () => {
  return (
    <section id="section-about">
      <div className="col-span-full lg:col-span-5 relative h-80 lg:h-full">
        <Image
          src="/image/Image.svg"
          alt="Picture of the author"
          fill
          className="rounded object-cover lg:shadow-[32px_32px_0px_0px_#FFFF]"
        />
      </div>
      <div className="lg:col-start-7 col-span-full">
        <h2 className="text-5xl leading-[56px]">
          Software Engineer and Infrastructure specialist based in Brazil.
        </h2>
        <p className="mt-5 text-gray">
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
          finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
          enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
          commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
          interdum interdum.
        </p>
        <div className="flex gap-12">
          <div className="flex items-center gap-4">
            <span className="text-[3.5rem] text-pink">17+</span>
            <p>
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[3.5rem] text-pink">325+</span>
            <p>
              Completed <br /> projects{" "}
            </p>
          </div>
        </div>
        <a href="/#section-contact" className="flex max-w-fit gap-2 hover:cursor-pointer h-14 px-8 rounded font-semibold items-center uppercase bg-purple">
          SAY HI
          <Image src="/icons/arrow-right.svg" alt="" width={30} height={30} />
        </a>
      </div>
    </section>
  );
};
