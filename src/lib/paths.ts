import { site } from "@/data/site";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.basePath}${normalized}`;
}
