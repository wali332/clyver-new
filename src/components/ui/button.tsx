import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper border border-ink hover:bg-ink/90 focus-visible:ring-ink/30",
  secondary:
    "bg-transparent text-ink border border-line hover:border-ink/40 hover:bg-ink/[0.03] focus-visible:ring-ink/20",
  ghost:
    "bg-transparent text-ink border border-transparent hover:bg-ink/[0.04] focus-visible:ring-ink/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-[3rem] px-6 py-3 text-sm md:text-base",
};

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = SharedProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type LinkButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    const linkProps = props as Omit<LinkButtonProps, keyof SharedProps | "href">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
