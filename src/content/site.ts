export type ProjectItem = {
  title: string;
  summary: string;
  impact: string;
  href: string;
  tags: string[];
};

export type WritingItem = {
  title: string;
  description: string;
  href: string;
};

export type NavIconName = "user" | "briefcase" | "toolbox" | "pen" | "mail";

export type NavItem = {
  href: string;
  label: string;
  icon: NavIconName;
};

export type ProfilePanel = {
  avatarAlt: string;
  shortBio: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  headline: string;
  bio: string;
  email: string;
  siteUrl: string;
  socialLinks: {
    telegram: string;
    facebook: string;
    twitter: string;
    instagram: string;
    github: string;
    linkedin: string;
  };
  navItems: NavItem[];
  profile: ProfilePanel;
  projects: ProjectItem[];
  writing: WritingItem[];
};

export const siteConfig: SiteConfig = {
  name: "I am Alek Metelsky",
  role: "an IT Swiss Army knife",
  headline:
    "I build clear digital experiences and share practical ideas with people who make things.",
  bio: "I focus on products, communities, and thoughtful execution. Replace this with a short paragraph that reflects your direction and values.",
  email: "you@example.com",
  siteUrl: "https://your-domain.com",
  socialLinks: {
    telegram: "https://t.me/your-handle",
    facebook: "https://facebook.com/your-handle",
    twitter: "https://x.com/your-handle",
    instagram: "https://instagram.com/your-handle",
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle"
  },
  navItems: [
    { href: "#about", label: "About Me", icon: "user" },
    { href: "#work", label: "Experience", icon: "toolbox" },
    { href: "#writing", label: "Writing", icon: "pen" },
    { href: "#contact", label: "Contact", icon: "mail" }
  ],
  profile: {
    avatarAlt: "Portrait placeholder",
    shortBio:
      "Short profile text goes here. Replace this with a concise positioning statement and your current focus."
  },
  projects: [
    {
      title: "Project One",
      summary: "Short description of the challenge and your contribution.",
      impact: "Outcome: improved engagement by 32% in 3 months.",
      href: "#",
      tags: ["Product", "UX", "Execution"]
    },
    {
      title: "Project Two",
      summary: "Short description of the product, audience, or system.",
      impact: "Outcome: reduced onboarding time from 5 days to 2 days.",
      href: "#",
      tags: ["Community", "Platform", "Growth"]
    },
    {
      title: "Project Three",
      summary: "Short description of scope, decisions, and delivery.",
      impact: "Outcome: delivered MVP in 6 weeks with a small team.",
      href: "#",
      tags: ["Leadership", "Delivery", "Strategy"]
    }
  ],
  writing: [
    {
      title: "What I Learned Building for Real Users",
      description: "A practical note on balancing craft and constraints.",
      href: "#"
    },
    {
      title: "Small Teams, Clear Systems",
      description: "How simple operating rules improve execution quality.",
      href: "#"
    }
  ]
};
