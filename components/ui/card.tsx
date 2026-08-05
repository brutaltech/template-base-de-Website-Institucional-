import type { ReactNode } from "react";

type CardVariant = "default" | "dark" | "stat";

const variants: Record<CardVariant, string> = {
  default: "border-brand-primary/10 bg-white/82 text-brand-primary shadow-sm",
  dark: "border-white/10 bg-brand-secondary text-white shadow-[0_24px_80px_rgba(22,33,39,0.22)]",
  stat: "border-brand-primary/10 bg-brand-surface-soft text-brand-primary",
};

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

export function Card({ children, className = "", variant = "default" }: CardProps) {
  return (
    <div
      className={`rounded-lg border p-6 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
