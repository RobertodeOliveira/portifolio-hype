import clsx from "clsx";
import { Props } from "./types";

export const SectionHeader = ({ title, className }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center mb-9 col-span-full",
        className
      )}
    >
      <h2 className="text-[40px]">{title}</h2>
      <hr className="w-[80px] border-pink" />
    </div>
  );
};
