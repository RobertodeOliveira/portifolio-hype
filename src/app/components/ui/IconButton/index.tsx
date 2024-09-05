import { ReactNode } from "react";
import { Props } from "./types";

export const IconButton = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      target="__blank"
      className="inline-flex items-center justify-center rounded bg-white text-black min-h-12 min-w-12 hover:bg-purple hover:text-white hover:cursor-pointer"
    >
      {children}
    </a>
  );
};
