import { IconButton } from "../ui/IconButton";
import { socialLinks } from "./data";

export const SocialMedias = () => {
  return (
    <>
      <p className="text-nowrap mb-3">Follow me on</p>
      <div className="flex gap-2">
        {socialLinks.map(({ href, icon, label }) => (
          <IconButton key={label} href={href}>
            {icon}
          </IconButton>
        ))}
      </div>
    </>
  );
};
