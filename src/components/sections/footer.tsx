"use client";

import { siteConfig } from "@/content/site";
import { chooseNextTransition } from "@/components/layout/transition-store";

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>Built with Codex @ 2026 | Alek Metelsky</p>
        <nav className="flex flex-wrap gap-4">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={chooseNextTransition}
              className="hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
