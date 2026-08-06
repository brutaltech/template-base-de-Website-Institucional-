"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { siteContent, siteCopy } from "@/content";

export function SiteHeader() {
  const { identity, nav } = siteContent;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => buttonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-brand-canvas/92 backdrop-blur supports-[backdrop-filter]:bg-brand-canvas/76">
      <Container className="flex min-h-20 items-center justify-between gap-4 py-3 md:gap-5">
        <Link
          className="min-w-0 max-w-[calc(100vw-6.5rem)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:max-w-sm md:max-w-[22rem] lg:max-w-md"
          href="/"
        >
          {identity.logoDark ? (
            <Image
              alt={identity.name}
              className="h-auto w-44 sm:w-52"
              height={60}
              priority
              src={identity.logoDark}
              width={240}
            />
          ) : (
            <span className="block max-w-xs font-display text-xl font-semibold leading-tight text-brand-primary sm:text-2xl">
              {identity.name}
            </span>
          )}
        </Link>

        <nav
          aria-label={siteCopy.header.primaryNavLabel}
          className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-1 md:flex"
        >
          {nav.links.map((link) => {
            const isCurrent = pathname === link.href;

            return (
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-center text-sm font-medium leading-tight transition hover:bg-brand-primary/5 hover:text-brand-primary active:bg-brand-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none ${
                  isCurrent
                    ? "bg-brand-primary/8 text-brand-primary"
                    : "text-brand-primary/76"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative md:hidden">
          <button
            aria-controls={menuId}
            aria-expanded={isOpen}
            aria-label={
              isOpen ? siteCopy.header.closeNavLabel : siteCopy.header.openNavLabel
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-brand-primary/15 bg-white text-brand-primary transition hover:border-brand-accent/50 active:translate-y-px active:bg-brand-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none motion-reduce:active:translate-y-0"
            onClick={() => setIsOpen((current) => !current)}
            ref={buttonRef}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" size={20} strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
            )}
          </button>

          <nav
            aria-label={siteCopy.header.mobileNavLabel}
            className={`absolute right-0 mt-3 w-[min(calc(100vw-2rem),20rem)] rounded-lg border border-brand-primary/10 bg-white p-2 shadow-2xl shadow-brand-primary/12 ${
              isOpen ? "flex flex-col gap-1" : "hidden"
            }`}
            id={menuId}
          >
            {nav.links.map((link, index) => {
              const isCurrent = pathname === link.href;

              return (
                <Link
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-sm font-medium leading-tight text-brand-primary hover:bg-brand-primary/5 active:bg-brand-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${
                    isCurrent ? "bg-brand-primary/8" : ""
                  }`}
                  href={link.href}
                  key={link.href}
                  onClick={() => closeMenu(false)}
                  ref={index === 0 ? firstLinkRef : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
