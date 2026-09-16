import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
  id?: string;
};

export function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`mx-auto w-full min-w-0 max-w-[76rem] px-4 sm:px-5 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
