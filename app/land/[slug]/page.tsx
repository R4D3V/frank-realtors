import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { landListings, contact } from "@/lib/data";

export function generateStaticParams() {
  return landListings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = landListings.find((l) => l.slug === slug);
  if (!listing) return {};
  return {
    title: `${listing.name} — Frank Realtors`,
    description: `${listing.name} in ${listing.location}. Priced from ${listing.priceLow} to ${listing.priceHigh} per plot, installments available.`,
  };
}

export default async function LandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = landListings.find((l) => l.slug === slug);
  if (!listing) notFound();

  const whatsappHref = `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(
    `Hi Frank Realtors, I'm interested in ${listing.name} (${listing.priceLow} - ${listing.priceHigh}).`
  )}`;

  const otherListings = landListings.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
        <Link href="/land" className="text-sm font-medium text-mist transition hover:text-red">
          ← All land available
        </Link>
        <Reveal>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {listing.location}
              </p>
              <h1 className="mt-2 font-display text-4xl text-navy sm:text-5xl">{listing.name}</h1>
            </div>
            <p className="font-display text-4xl text-red sm:text-5xl">
              {listing.priceLow} – {listing.priceHigh}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal direction="left">
            <Gallery images={listing.images} alt={listing.name} />
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="space-y-6">
              <div className="neu-raised space-y-4 p-7">
                {listing.description.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-mist">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="neu-card p-7">
                <h2 className="font-display text-2xl text-navy">Plot features</h2>
                <ul className="mt-4 space-y-3">
                  {listing.features.map((feature) => (
                    <li key={feature} className="arrow-bullet text-sm text-ink">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn mt-6 flex items-center justify-center px-6 py-3 text-sm font-semibold text-red"
                >
                  Ask about this plot on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="neu-raised-sm mt-3 flex items-center justify-center px-6 py-3 text-sm font-semibold text-navy"
                >
                  Use the contact form instead
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="More estates" title="Other land available" className="pt-4!">
        <div className="grid gap-6 sm:grid-cols-3">
          {otherListings.map((l, i) => (
            <Reveal key={l.slug} delay={i * 70}>
              <Link href={`/land/${l.slug}`} className="neu-card block p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {l.location}
                </p>
                <h3 className="mt-2 text-base font-semibold text-navy">{l.name}</h3>
                <p className="mt-3 font-display text-2xl text-red">
                  {l.priceLow} – {l.priceHigh}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
