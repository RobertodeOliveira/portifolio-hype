import { ButtonIcon } from "../ui/ButtonIcon"

export const SocialMedias = () => { 
  return ( 
    <div>
      <p>Follow me on</p>
      <div className="flex gap-2">
        <ButtonIcon href="##" icon="/icons/facebook.svg" />
        <ButtonIcon href="##" icon="/icons/instagram.svg" />
        <ButtonIcon href="##" icon="/icons/github.svg" />
      </div>
    </div>
  )
}