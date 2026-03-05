"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { ContactSection } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { WorkSection } from "@/components/sections/work";
import { WritingSection } from "@/components/sections/writing";
import { PageTransitionCss, TransitionName, TransitionPhase } from "./page-transition-css";
import { getTransitionIndex, subscribeTransition } from "./transition-store";

function normalizeHash(hash: string) {
  const value = hash || "#about";
  if (value === "#home") return "#about";
  if (value === "#about") return "#about";
  if (value === "#work") return "#work";
  if (value === "#writing") return "#writing";
  if (value === "#contact") return "#contact";
  return "#about";
}

export function SpaContentRouter() {
  const [renderHash, setRenderHash] = useState("#about");
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const transitionIndex = useSyncExternalStore(
    subscribeTransition,
    getTransitionIndex,
    getTransitionIndex
  );

  const transitionName: TransitionName =
    (
      [
        "fade",
        "slide-up",
        "scale-fade",
        "blur-fade",
        "slide-left",
        "slide-right",
        "zoom-out",
        "rotate-fade",
        "flip-x",
        "flip-y",
        "swirl-fade",
        "skew-fade"
      ][transitionIndex] as TransitionName
    ) ?? "fade";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setRenderHash(normalizeHash(window.location.hash));
    });

    const onHashChange = () => {
      const nextHash = normalizeHash(window.location.hash);
      setRenderHash((prevRender) => {
        if (nextHash === prevRender) return prevRender;
        setPendingHash(nextHash);
        setPhase("exit");
        return prevRender;
      });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const onAnimationEnd = () => {
    if (phase === "exit" && pendingHash) {
      setRenderHash(pendingHash);
      setPendingHash(null);
      setPhase("enter");
      return;
    }

    if (phase === "enter") {
      setPhase("idle");
    }
  };

  const content = useMemo(() => {
    if (renderHash === "#about") return <Hero />;
    if (renderHash === "#work") return <WorkSection />;
    if (renderHash === "#writing") return <WritingSection />;
    if (renderHash === "#contact") return <ContactSection />;
    return <Hero />;
  }, [renderHash]);

  return (
    <PageTransitionCss transitionName={transitionName} phase={phase} onAnimationEnd={onAnimationEnd}>
      {content}
    </PageTransitionCss>
  );
}
