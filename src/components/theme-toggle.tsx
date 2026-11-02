"use client";

import { Moon, Sun } from "lucide-react";
import type { ReactElement } from "react";
import { themeColors } from "@/data/site";

function toggleTheme(): void {
  const root = document.documentElement;
  const nextIsDark = !root.classList.contains("dark");
  root.classList.toggle("dark", nextIsDark);

  try {
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  } catch {
    // Private browsing can block storage. The class change still applies.
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", nextIsDark ? themeColors.dark : themeColors.light);
  }
}

export function ThemeToggle(): ReactElement {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-foreground hover:border-violet-soft"
    >
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
