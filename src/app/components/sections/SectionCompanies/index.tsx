import Image from "next/image";

export const SectionCompanies = () => {
  return (
    <section>
      <h3 className="col-span-3 text-2xl self-center">
        I have <span className="text-pink">2 years</span> of professional
        experience
      </h3>

      <a className="col-start-5 col-span-full bg-white py-10 rounded-lg flex justify-center hover:cursor-pointer">
        <Image
          src="/image/allianca.svg"
          width={115}
          height={24}
          alt="Logo youtube"
        />
      </a>
    </section>
  );
};
