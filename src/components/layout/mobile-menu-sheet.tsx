"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { NavIcon } from "./nav-icon";
import { RightProfilePanel } from "./right-profile-panel";
import { chooseNextTransition } from "./transition-store";

function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

export function MobileMenuSheet() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const triggerNode = triggerRef.current;
    const panel = panelRef.current;
    if (!panel) return;
    const focusables = getFocusable(panel);
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = getFocusable(panel);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      triggerNode?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu-sheet"
        className="fixed bottom-6 right-6 z-40 rounded-full border border-line bg-accent p-4 text-canvas shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu-sheet"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            className="menu-sheet-enter absolute bottom-0 left-0 right-0 max-h-[88vh] overflow-auto rounded-t-3xl border-t border-line bg-canvas p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Menu</p>
              <button
                type="button"
                className="rounded-full border border-line p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile main menu" className="mb-6 grid grid-cols-4 gap-3">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    chooseNextTransition();
                    setOpen(false);
                  }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface/85 px-2 py-3 text-[11px] text-muted transition hover:bg-surface-elev/90 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <NavIcon name={item.icon} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <RightProfilePanel mobile />
          </div>
        </div>
      ) : null}
    </>
  );
}
