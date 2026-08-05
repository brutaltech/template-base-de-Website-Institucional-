import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 font-display text-3xl font-semibold leading-tight text-brand-primary first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-2xl font-semibold leading-tight text-brand-primary">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-lg leading-8 text-brand-primary/72">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 grid gap-3 pl-5 text-lg leading-8 text-brand-primary/72">
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="list-disc">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-brand-primary">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-brand-accent bg-[#f0f4ef] px-5 py-4 text-brand-primary">
      {children}
    </blockquote>
  ),
  a: ({ children, href }) => (
    <a
      className="font-semibold text-brand-secondary underline decoration-brand-accent/55 underline-offset-4 transition hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none"
      href={href}
    >
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
