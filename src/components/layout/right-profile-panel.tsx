"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import portrait from "@/content/p01.jpg";

type RightProfilePanelProps = {
  mobile?: boolean;
};

type SocialIconName = "telegram" | "linkedin" | "facebook" | "twitter" | "instagram";

function SocialIcon({ name }: { name: SocialIconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true
  };

  if (name === "telegram") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 8-4-2 8-3-2-2 2 .4-2.8" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 10v6" />
        <path d="M8 8h.01" />
        <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
        <path d="M12 13v-3" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M13.5 20v-6h2" />
        <path d="M11.5 14h4" />
        <path d="M13.5 14v-2.5a1.5 1.5 0 0 1 1.5-1.5h1" />
      </svg>
    );
  }

  if (name === "twitter") {
    return (
      <svg {...common}>
        <path d="M4 5h4.2l3.2 4.5L15.3 5H20l-6.4 6.7L20 19h-4.2l-3.7-5.2L7.3 19H4l6.5-6.8z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.6" cy="7.6" r="0.8" />
    </svg>
  );
}

export function RightProfilePanel({ mobile = false }: RightProfilePanelProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (mobile || typeof window === "undefined") return;

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      setOffset({ x, y });
    };

    const handleLeave = () => setOffset({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [mobile]);

  return (
    <aside
      className={
        mobile
          ? "space-y-6 rounded-2xl border border-line bg-surface/85 p-5"
          : "profile-dot-bg sticky top-0 h-screen overflow-hidden border-l border-line bg-canvas/70 p-6"
      }
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="aspect-[3/4] w-2/3 overflow-hidden rounded-2xl border border-line bg-surface-elev/85 p-2 shadow-card">
            <div
              className="relative h-full w-full overflow-hidden rounded-xl"
              style={{
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.08)`,
                transition: "transform 160ms ease-out"
              }}
            >
              <Image
                src={portrait}
                alt={siteConfig.profile.avatarAlt}
                fill
                sizes={mobile ? "70vw" : "33vw"}
                className="object-cover"
                priority={!mobile}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center font-heading text-3xl leading-tight">{siteConfig.name}</h2>
          <p className="mt-2 text-center text-profile-accent">{siteConfig.role}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              className="inline-flex rounded-full border border-line bg-surface/85 p-2.5 text-muted transition hover:border-profile-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent"
              href={siteConfig.socialLinks.telegram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
            >
              <SocialIcon name="telegram" />
            </a>
            <a
              className="inline-flex rounded-full border border-line bg-surface/85 p-2.5 text-muted transition hover:border-profile-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent"
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <SocialIcon name="linkedin" />
            </a>
            <a
              className="inline-flex rounded-full border border-line bg-surface/85 p-2.5 text-muted transition hover:border-profile-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent"
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
            >
              <SocialIcon name="facebook" />
            </a>
            <a
              className="inline-flex rounded-full border border-line bg-surface/85 p-2.5 text-muted transition hover:border-profile-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent"
              href={siteConfig.socialLinks.twitter}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Twitter"
            >
              <SocialIcon name="twitter" />
            </a>
            <a
              className="inline-flex rounded-full border border-line bg-surface/85 p-2.5 text-muted transition hover:border-profile-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent"
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
            >
              <SocialIcon name="instagram" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
