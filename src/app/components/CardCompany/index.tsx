import { ReactNode } from "react"

type CardCompanyProps = { 
  children: ReactNode
}

export const CardCompany = ({children}: CardCompanyProps) => { 
  return ( 
    <a  className="bg-white px-6 py-10 w-[312px] max-h-[120px] rounded-lg max-w-40 flex justify-center hover:cursor-pointer">
      {children}
    </a>
  )
}