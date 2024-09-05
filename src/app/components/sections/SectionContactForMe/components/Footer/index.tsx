import Image from "next/image"

export const Footer = () => {
  return ( 
    <div className="text-black mt-6 flex gap-3">
      <a href="##" className="p-5 rounded-full border border-gray-100 flex items-center justify-center hover:bg-purple">
        <img src="/icons/instagram.svg" alt="" />
      </a>
      <a href="##" className="p-5 rounded-full border border-gray-100 flex items-center justify-center hover:bg-purple">
        <img src="/icons/facebook.svg" alt="" />
      </a>
      <a href="##" className="p-5 rounded-full border border-gray-100 flex items-center justify-center hover:bg-purple">
        <img src="/icons/twitter.svg" alt="" />
      </a>
      <a href="##" className="p-5 rounded-full border border-gray-100 flex items-center justify-center hover:bg-purple">
        <img src="/icons/youtube-icon.svg" alt="" />
      </a>    
    </div>
  )
}