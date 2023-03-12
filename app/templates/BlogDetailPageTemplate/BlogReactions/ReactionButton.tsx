import type { ElementType, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  href?: string;
  target?: "_blank";
}

export const ReactionButton = ({ as: Comp = "button", children, ...props }: Props) => (
  <Comp
    className="flex justify-center items-center content-center w-10 h-10 rounded-full text-3xl hover:bg-secondary"
    {...props}
  >
    {children}
  </Comp>
);
