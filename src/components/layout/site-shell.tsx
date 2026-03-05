import { ReactNode } from "react";
import { LeftRailNav } from "./left-rail-nav";
import { MobileMenuSheet } from "./mobile-menu-sheet";
import { RightProfilePanel } from "./right-profile-panel";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <div className="h-screen md:grid md:grid-cols-[104px_minmax(0,1fr)]">
        <LeftRailNav />
        <div className="min-h-0 md:grid md:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <main className="content-dot-bg content-scroll flex h-screen flex-col overflow-y-auto overflow-x-hidden pb-24 md:pb-0">
            {children}
          </main>
          <div className="hidden md:block">
            <RightProfilePanel />
          </div>
        </div>
      </div>
      <MobileMenuSheet />
    </>
  );
}
