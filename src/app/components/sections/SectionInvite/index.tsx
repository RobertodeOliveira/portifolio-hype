import { Button } from "../../ui/Button";
import ArrowLeftIcon from "@/assets/icons/arrow-right.svg";

export const SectionInvite = () => {
  return (
    <section className="bg-banner-section bg-cover h-60 content-center text-center">
      <h3 className="text-3xl col-start-2 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-4 lg:col-span-6">
        Got a Project in Mind? Let's Make Something Awesome{" "}
        <span className="text-pink">Together</span>.
      </h3>
      <Button
        variant="primary"
        className="row-start-2 col-span-full justify-self-center"
      >
        Hire me <ArrowLeftIcon />
      </Button>
    </section>
  );
};
