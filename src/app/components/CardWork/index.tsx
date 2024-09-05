import clsx from "clsx";
import Image from "next/image";

type CardWorkProps = {
  text: string;
  image: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const CardWork = ({ text, image, className }: CardWorkProps) => {
  return (
    <div className={clsx("bg-white rounded-md", className)}>
      <div>
        <Image
          src={image}
          layout="responsive"
          width={428}
          height={300}
          alt=""
        />
      </div>
      <div className="p-6">
        <span className="text-black text-2xl mb-4 block">{text}</span>
        <Image
          src="/icons/arrow-right-pink.svg"
          width={40}
          height={24}
          alt=""
        />
      </div>
    </div>
  );
};
