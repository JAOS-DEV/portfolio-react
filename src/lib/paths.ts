import { site } from "@/data/site";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = process.env.NODE_ENV === "production" ? site.basePath : "";
  return `${prefix}${normalized}`;
}
