"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { NavIcon } from "./nav-icon";
import { chooseNextTransition } from "./transition-store";

function normalizeNavHash(hash: string) {
  const value = hash || "#about";
  if (value === "#home") return "#about";
  if (value === "#about") return "#about";
  if (value === "#work") return "#work";
  if (value === "#writing") return "#writing";
  if (value === "#contact") return "#contact";
  return "#about";
}

export function LeftRailNav() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    const updateHash = () => setActiveHash(normalizeNavHash(window.location.hash));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <aside className="sticky top-0 hidden h-screen border-r border-line bg-canvas/80 backdrop-blur md:block">
      <nav aria-label="Main menu" className="flex h-full flex-col items-center gap-4 px-3 py-8">
        {siteConfig.navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={chooseNextTransition}
            aria-current={activeHash === item.href ? "location" : undefined}
            className={`group flex w-20 flex-col items-center gap-1 rounded-xl px-2 py-3 text-center text-[11px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              activeHash === item.href
                ? "bg-surface-elev/90 text-menu-current"
                : "text-muted hover:bg-surface-elev/85 hover:text-ink"
            }`}
          >
            <NavIcon name={item.icon} className="h-6 w-6" />
            <span className="whitespace-nowrap leading-tight">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
