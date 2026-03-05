import { NavIconName } from "@/content/site";

type NavIconProps = {
  name: NavIconName;
  className?: string;
};

export function NavIcon({ name, className = "h-6 w-6" }: NavIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 19.5c1.4-3.1 4.1-4.8 7.5-4.8s6.1 1.7 7.5 4.8" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
        <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
        <path d="M3.5 12h17" />
      </svg>
    );
  }

  if (name === "toolbox") {
    return (
      <svg {...common}>
        <rect x="3.5" y="8.5" width="17" height="10" rx="2" />
        <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" />
        <path d="M3.5 12.5h17" />
        <path d="M10.6 12.5h2.8" />
      </svg>
    );
  }

  if (name === "pen") {
    return (
      <svg {...common}>
        <path d="m4.5 19.5 4.1-1 9.2-9.2a2 2 0 0 0-2.8-2.8l-9.2 9.2-1.3 3.8z" />
        <path d="m13.8 7.2 3 3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5Z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}
