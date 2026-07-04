import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  noReveal,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  noReveal?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      {(eyebrow || title || intro) && (
        noReveal ? (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{title}</h2>
            )}
            {intro && <p className="mt-4 text-base leading-relaxed text-mist">{intro}</p>}
          </div>
        ) : (
          <Reveal>
            <div className="mb-12 max-w-2xl">
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{title}</h2>
              )}
              {intro && <p className="mt-4 text-base leading-relaxed text-mist">{intro}</p>}
            </div>
          </Reveal>
        )
      )}
      {noReveal ? <div>{children}</div> : <Reveal delay={100}>{children}</Reveal>}
    </section>
  );
}
