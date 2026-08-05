import { existsSync } from "node:fs";
import path from "node:path";

export function publicAssetExists(src?: string) {
  if (!src || !src.startsWith("/")) {
    return false;
  }

  const relativePath = src.split(/[?#]/)[0].replace(/^\/+/, "");
  const publicRoot = path.resolve(process.cwd(), "public");
  const filePath = path.resolve(publicRoot, relativePath);

  return filePath.startsWith(publicRoot + path.sep) && existsSync(filePath);
}
