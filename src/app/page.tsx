import { SiteShell } from "@/components/layout/site-shell";
import { SpaContentRouter } from "@/components/layout/spa-content-router";
import { SiteFooter } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <SiteShell>
      <div className="flex-1 md:px-6 lg:px-10">
        <SpaContentRouter />
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
