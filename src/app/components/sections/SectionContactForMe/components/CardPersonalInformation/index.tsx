import Image from "next/image"

type CardPersonalInformationProps = {
  icon: string
  text: string
}

export const CardPersonalInformation = ({icon, text}: CardPersonalInformationProps) => { 
  return ( 
    <div>
      <div className="flex gap-5 items-center">
        <div className="rounded-full bg-translucentPurple lg:w-20 lg:h-20 p-6 items-center justify-center">
          <Image src={icon} width={32} height={32} alt=""/> 
        </div>
        <p className="text-black text-lg w-full max-w-80 break-words">
          {text}
        </p>
      </div>
    </div>
  )
}