import Image from "next/image"

type Props = {
  icon: string
  href: string
}

export const ButtonIcon = ({ icon, href }: Props) => { 
  return ( 
    <>
      <a href={href} className="p-4 rounded bg-white max-w-12 mt-3 hover:bg-purple hover:cursor-pointer">
        <Image src={icon} width={48} height={48} alt=""/>
      </a>
    </>
  )
}