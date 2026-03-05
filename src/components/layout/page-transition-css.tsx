"use client";

import { AnimationEvent, ReactNode } from "react";

export type TransitionName =
  | "fade"
  | "slide-up"
  | "scale-fade"
  | "blur-fade"
  | "slide-left"
  | "slide-right"
  | "zoom-out"
  | "rotate-fade"
  | "flip-x"
  | "flip-y"
  | "swirl-fade"
  | "skew-fade";
export type TransitionPhase = "idle" | "exit" | "enter";

type PageTransitionCssProps = {
  transitionName: TransitionName;
  phase: TransitionPhase;
  onAnimationEnd: () => void;
  children: ReactNode;
};

export function PageTransitionCss({
  transitionName,
  phase,
  onAnimationEnd,
  children
}: PageTransitionCssProps) {
  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (phase === "idle") return;

    onAnimationEnd();
  };

  return (
    <div
      className={`page-transition page-transition--${transitionName} page-transition--${phase}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}
