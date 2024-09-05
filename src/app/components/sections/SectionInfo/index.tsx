import Image from "next/image"
import { Button } from "../../ui/Button"

export const SectionInfo = () => {
  return ( 
    <section id="about" className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 lg:grid-rows-1 grid-rows-2 gap-14">
      <div className="relative ml-8 mt-8 bg-white rounded" >
      <Image
        src="/image/Image.svg"
        alt="Picture of the author"
        fill
        className="rounded -translate-x-8 -translate-y-8"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
      <div>
        <h2 className="text-5xl leading-[56px]">Software Engineer and Infrastructure specialist based in Brazil.</h2>
        <p className="mt-5 text-gray">
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. 
          Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor. 
          Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. 
          Aenean venenatis sapien et interdum interdum.
        </p>
        <div className="flex gap-12 max-w-lg w-full"> 
          <div className="flex items-center gap-4">
            <span className="text-4xl lg:text-[56px] text-pink">17+</span> 
            <p>Years of <br /> Experience</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl lg:text-[56px] text-pink">325+</span> 
            <p>Completed <br /> projects </p>
          </div>
        </div>
          <Button variant="primary">
            SAY HI <img src="/icons/arrow-right.svg" alt="" />
          </Button>
      </div>
    </section>
  )
}