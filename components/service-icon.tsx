import {
  ClipboardCheck,
  DraftingCompass,
  FileCheck2,
  Hammer,
  LampDesk,
  Network,
  Ruler,
  SearchCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  ClipboardCheck,
  DraftingCompass,
  FileCheck2,
  Hammer,
  LampDesk,
  Network,
  Ruler,
  SearchCheck,
};

type ServiceIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function ServiceIcon({
  name,
  className,
  size = 22,
}: ServiceIconProps) {
  const Icon = serviceIcons[name] ?? ClipboardCheck;

  return (
    <Icon
      aria-hidden="true"
      className={className}
      size={size}
      strokeWidth={1.8}
    />
  );
}
