type CardProfileProps = {
  name: string
  description: string
  company: string
}

export const CardProfile = ({name, description, company}: CardProfileProps) => {
  return ( 
    <div className="bg-white p-6 lg:max-w-80 rounded-md h-24 flex gap-4">
      <div className="rounded-full bg-gray-500 w-12 h-12"></div>
      <div>
        <h3 className="text-lg text-black">{name}</h3>
        <p className="text-gray-500 text-sm">
          {description} <span className="text-pink">{company}</span>
        </p>
      </div>
    </div>
  )
}