import clsx from "clsx";
import Image from "next/image";
import ArrowLeftIcon from "@/assets/icons/arrow-right-pink.svg";

type CardWorkProps = {
  text: string;
  image: string;
  href: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardWork = ({ text, image, href, className }: CardWorkProps) => {
  return (
    <a href={href} target="_blank" className={clsx("bg-white rounded-md group", className)}>
      <Image src={image} layout="responsive" width={428} height={300} alt="" />
      <div className="p-6">
        <span className="text-black text-2xl mb-4 block ">{text}</span>
        <div className="flex h-6">
          <div className="flex group-hover:text-pink w-0 group-hover:w-full overflow-hidden ease-in-out delay-150 transition-all uppercase">
            Discuss Now
          </div>
          <ArrowLeftIcon />
        </div>
      </div>
    </a>
  );
};