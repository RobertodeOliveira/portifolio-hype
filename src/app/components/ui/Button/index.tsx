import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  variant: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({children, variant, ...props}: Props) => {
  return ( 
    <>
      <button {...props} className={clsx('flex gap-2 hover:cursor-pointer py-5 px-8 rounded font-semibold w-fit' ,{'bg-purple': variant === 'primary', 'bg-white text-black': variant === 'secondary'})}>
        {children}
      </button>
    </>
  )
}