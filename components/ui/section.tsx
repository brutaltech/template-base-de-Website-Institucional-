import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`} id={id}>
      {children}
    </section>
  );
}
