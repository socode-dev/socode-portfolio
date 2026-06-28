import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SplashScreen({ minDuration = 750 }: { minDuration?: number }) {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setLeaving(true), minDuration);
    const t2 = window.setTimeout(() => setGone(true), minDuration + 450);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [minDuration]);

  if (gone) return null;

  return (
    <div
      aria-hidden={leaving}
      role="status"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background",
        "transition-opacity duration-[450ms] ease-out",
        leaving ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      {/* Ambient layers — match the app shell */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-70" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Brand mark */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-2xl gradient-primary opacity-40 blur-xl splash-pulse" />
          <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary shadow-soft splash-float">
            <span className="font-mono text-base font-bold tracking-tight text-white">
              {"</>"}
            </span>
          </div>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-[13px] font-semibold tracking-[0.2em] text-foreground">
            SOCODE
          </span>
          <span className="text-[11px] text-muted-foreground">Loading workspace…</span>
        </div>

        {/* Indeterminate progress bar */}
        <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-border/60">
          <div className="absolute inset-y-0 left-0 w-1/3 rounded-full gradient-primary splash-bar" />
        </div>
      </div>

      <style>{`
        @keyframes splash-bar {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(420%); }
        }
        @keyframes splash-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes splash-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 0.6;  transform: scale(1.08); }
        }
        .splash-bar   { animation: splash-bar 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .splash-float { animation: splash-float 2.4s ease-in-out infinite; }
        .splash-pulse { animation: splash-pulse 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .splash-bar, .splash-float, .splash-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
