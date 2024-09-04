import { ReactNode } from "react"

type Props = {
  children: ReactNode
  color: string
  padding: string
}

export const Button = ({children, color, padding}: Props) => {
  return ( 
    <>
      <div className={`text-[${color}] p-[${padding}]`}>
        {children}
      </div>
    </>
  )
}