import Image from "next/image"

type CardPersonalInformationProps = {
  icon: string
  text: string
}

export const CardPersonalInformation = ({icon, text}: CardPersonalInformationProps) => { 
  return ( 
    <div>
      <div className="flex gap-5 items-center">
        <div className="rounded-full bg-translucentPurple w-20 h-20  flex items-center justify-center">
          <Image src={icon} width={32} height={32} alt=""/>
        </div>
        <p className="text-black text-lg w-80">
          {text}
        </p>
      </div>
    </div>
  )
}