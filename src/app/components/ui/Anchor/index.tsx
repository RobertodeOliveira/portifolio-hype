import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = ({ children, variant, className, ...props }: Props) => {
  return (
    <a
      {...props}
      className={clsx(
        "flex max-w-fit gap-2 hover:cursor-pointer h-14 px-8 rounded font-semibold items-center uppercase",
        {
          "bg-purple text-white": variant === "primary",
          "bg-white text-black": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </a>
  );
};
