type Props = { 
  title: string
}

export const SectionHeader = ({title}: Props) => { 
  return ( 
    <div className="flex flex-col items-center">
      <h2 className="text-[40px]">{title}</h2>
      <div className="w-[80px] border-b-2 border-[#ED1CA6]"></div>
    </div>
  )
}