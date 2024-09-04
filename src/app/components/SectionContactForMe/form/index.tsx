export const Form = () => { 
  return (
    <form className="p-12 bg-white lg:max-w-[760px] w-full rounded-lg mr-3">
      <div>
        <h3 className="text-black text-3xl font-medium mb-6">Let me know here.</h3>
        <div className="flex gap-4">
          <input className="border border-[#DFE3EB] py-3 px-5 rounded w-1/2 focus:border-sky-500" placeholder="Full name" type="text" />
          <input className="border border-[#DFE3EB] py-3 px-5 rounded w-1/2" placeholder="Email address " type="text" name="" id="" />
        </div>
        <input className="border border-[#DFE3EB] py-3 px-5 rounded w-full mt-4" placeholder="Subjects" type="text" />
      </div>
      <textarea className="border border-[#DFE3EB] py-3 px-5 rounded w-full mt-4 h-36 " placeholder="Message" name="" id=""></textarea>
      <button className="text-white bg-purple px-8 py-4 rounded-md mt-8" type="submit">SEND MESSAGE</button>
    </form>
  )
}