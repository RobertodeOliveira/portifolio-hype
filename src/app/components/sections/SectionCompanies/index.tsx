import Image from "next/image";

export const SectionCompanies = () => {
  return (
    <section>
      <h3 className="col-span-3 text-2xl self-center">
        I have <span className="text-pink">2 years</span> of professional
        experience
      </h3>

      <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A91073868&keywords=Allian%C3%A7a&origin=ENTITY_SEARCH_HOME_HISTORY&sid=6w*" target="_blank" className="col-start-5 col-span-full bg-white py-10 rounded-lg flex justify-center hover:cursor-pointer">
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
