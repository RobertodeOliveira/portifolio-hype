import Image from "next/image"

type CardWorkProps = { 
  text: string
  image: string
}

export const CardWork = ({ text, image }: CardWorkProps) => { 
  return ( 
    <div className="bg-white w-full rounded-md">
      <div>
        <Image src={image} layout="responsive" width={428} height={300} alt=""/>
      </div>
      <div className="p-6">
        <span className="text-black text-2xl mb-4 block">{text}</span>
        <Image src='/icons/arrow-right-pink.svg' width={40} height={24} alt=""/>
      </div>
    </div>
  )
}