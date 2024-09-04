import { ButtonIcon } from "../ui/ButtonIcon"

export const SocialMedias = () => { 
  return ( 
    <>
      <p>Follow me on</p>
      <div className="flex gap-2">
        <ButtonIcon href="##" icon="/image/Facebook.svg" />
        <ButtonIcon href="##" icon="/image/instagram.svg" />
        <ButtonIcon href="##" icon="/image/github.svg" />
      </div>
    </>
  )
}