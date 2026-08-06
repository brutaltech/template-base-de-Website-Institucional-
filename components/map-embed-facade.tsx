"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

type MapEmbedFacadeProps = {
  buttonLabel: string;
  src: string;
  title: string;
};

export function MapEmbedFacade({ buttonLabel, src, title }: MapEmbedFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        className="min-h-[24rem] w-full border-0 lg:min-h-[31rem]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title={title}
      />
    );
  }

  return (
    <div className="blueprint-grid flex min-h-[24rem] w-full items-center justify-center p-6 lg:min-h-[31rem]">
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-brand-button transition hover:-translate-y-0.5 hover:bg-brand-secondary active:translate-y-px active:bg-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0"
        onClick={() => setIsLoaded(true)}
        type="button"
      >
        <MapPin aria-hidden="true" size={18} strokeWidth={1.8} />
        {buttonLabel}
      </button>
    </div>
  );
}
