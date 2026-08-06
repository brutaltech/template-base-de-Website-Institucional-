import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white shadow-brand-button hover:-translate-y-0.5 hover:bg-brand-secondary active:bg-brand-secondary",
  secondary:
    "border border-brand-primary/20 bg-white/80 text-brand-primary hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-white active:bg-brand-surface",
  ghost:
    "text-brand-primary hover:bg-brand-primary/5 hover:text-brand-secondary active:bg-brand-primary/10",
};

const baseClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "className" | "href">;

type NativeButtonProps = SharedButtonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const composedClassName = `${baseClassName} ${variants[variant]} ${className}`;

  if (typeof props.href === "string") {
    const { href, ...linkProps } = props;

    return (
      <Link className={composedClassName} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={composedClassName} {...props}>
      {children}
    </button>
  );
}
