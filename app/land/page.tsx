import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { landListings, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Land Available — Frank Realtors",
  description:
    "Land for sale across Wakiso and Mpigi, Uganda — estates from Busunju to Buloba, with flexible installment payment plans.",
};

export default function LandPage() {
  return (
    <>
      <Section
        eyebrow="On the market now"
        title="Land available"
        intro="We allow installment payments on every estate below. Prices are per-plot ranges — open a listing for the full photo gallery, features, and terms."
        className="pt-16"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {landListings.map((plot, i) => (
            <div key={plot.slug} className="neu-card overflow-hidden">
              <Link href={`/land/${plot.slug}`} className="relative block aspect-[4/3] w-full">
                <Image
                  src={plot.images[0]}
                  alt={plot.name}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </Link>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {plot.location}
                </p>
                <Link href={`/land/${plot.slug}`}>
                  <h3 className="mt-2 text-base font-semibold text-navy transition hover:text-red">
                    {plot.name}
                  </h3>
                </Link>
                <p className="mt-4 font-display text-3xl text-red">
                  {plot.priceLow} – {plot.priceHigh}
                </p>
                <p className="mt-1 text-xs text-mist">per plot, installments available</p>
                <div className="mt-5 flex gap-3">
                  <Link
                    href={`/land/${plot.slug}`}
                    className="neu-raised-sm flex flex-1 items-center justify-center px-4 py-2.5 text-sm font-semibold text-navy"
                  >
                    View gallery
                  </Link>
                  <a
                    href={`https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(
                      `Hi Frank Realtors, I'm interested in ${plot.name} (${plot.priceLow} - ${plot.priceHigh}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-btn flex flex-1 items-center justify-center px-4 py-2.5 text-sm font-semibold text-red"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0!">
        <div className="neu-raised flex flex-col items-center gap-6 p-10 text-center sm:p-14">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">
            Don't see the right location?
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-mist">
            New estates are added regularly. Tell us your budget and preferred
            area and we'll match you to a plot.
          </p>
          <a
            href={`https://wa.me/${contact.phoneDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn px-8 py-3.5 text-sm font-semibold text-red"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
