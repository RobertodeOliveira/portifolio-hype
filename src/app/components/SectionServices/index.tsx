import { BsBox } from "react-icons/bs"
import { IoMdCode } from "react-icons/io"
import { LuLayers } from "react-icons/lu"
import { TbLayoutColumns } from "react-icons/tb"
import { Card } from "../Card"

 
const listWorks = [
  {
    icon: <LuLayers />,
    text: 'Product Design',
  },
  {
    icon: <BsBox />,
    text: 'Product Design',
  },
  {
    icon: <TbLayoutColumns />,
    text: 'Product Design',
  },
  {
    icon: <IoMdCode />,
    text: 'Product Design',
  }
]

export const SectionServices = () => {
  return ( 
    <>
      <span className="text-[40px]">My Service</span>
      <div className="w-[80px] border-b-2 border-[#ED1CA6]"></div>
      <div className="mt-12 grid-cols-* flex justify-between w-full">
        {listWorks.map((item, index) => {
          return ( 
                <Card key={index}>
                  <span>{item.text}</span>
                </Card>
          )
        } )}
      </div>
 
  </>
  )
}