import { Button } from "../../ui/Button"

export const SectionInvite = () => {
  return ( 
    <section className="bg-banner-section bg-contain h-60 flex items-center justify-center">
      <div className="flex flex-col items-center font-normal gap-8">
        <h3 className="text-3xl max-w-[480px]">Got a Project in Mind? Let's Make Something Awesome <span className="text-pink">Together</span>.</h3>
        <Button variant="primary">HERE ME <img src="/icons/arrow-right.svg" alt="" /></Button>
      </div>
    </section>
  )
} 