import Link from "next/link";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services, landListings, contact } from "@/lib/data";

export default function Home() {
  const featuredLand = landListings.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal direction="left">
              <p className="neu-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-navy">
                <span className="h-2 w-2 rounded-full bg-red" />
                Land services · {contact.location}
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
                We Have It.
              </h1>
              <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-mist">
                Frank Realtors develops, surveys, documents, and sells land across
                Wakiso and Mpigi — with estates from Busunju to Buloba, and
                installment payments on every plot.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/land" className="neu-btn px-7 py-3.5 text-sm font-semibold text-red">
                  View land available
                </Link>
                <a
                  href={`https://wa.me/${contact.phoneDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-raised-sm px-7 py-3.5 text-sm font-semibold text-navy"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                <Stat value="12+" label="Active estates" />
                <Stat value="7" label="Land & build services" />
                <Stat value="0%" label="Interest on installments*" />
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className="neu-raised relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center p-10">
                <div className="neu-pressed flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <RoofBadge />
                  <p className="font-display text-3xl text-navy">Frank Realtors</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    We Have It
                  </p>
                  <div className="neu-divider w-16" />
                  <p className="text-sm leading-relaxed text-mist">
                    Estate development to compound design — one team, start to finish.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section
        eyebrow="What we do"
        title="Services offered"
        intro="Every stage of a land or building project, handled under one roof — from the first survey peg to the finished compound."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Land preview */}
      <Section
        eyebrow="Land available"
        title="A few estates on the market"
        intro="All estates come with flexible installment payment plans. Prices below are per-plot ranges."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {featuredLand.map((plot, i) => (
            <Reveal key={plot.slug} delay={i * 70}>
              <Link href={`/land/${plot.slug}`} className="neu-card block p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {plot.location}
                </p>
                <h3 className="mt-2 text-base font-semibold text-navy">{plot.name}</h3>
                <p className="mt-4 font-display text-3xl text-red">
                  {plot.priceLow} – {plot.priceHigh}
                </p>
                <p className="mt-1 text-xs text-mist">per plot, installments available</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/land" className="neu-btn inline-block px-7 py-3.5 text-sm font-semibold text-red">
            See all estates & prices
          </Link>
        </div>
      </Section>

      {/* Installment callout */}
      <Section className="pt-0!">
        <div className="neu-raised flex flex-col items-center gap-6 p-10 text-center sm:p-14">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">
            We allow installment payments.
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-mist">
            Own land in Busunju, Buloba, Zigoti, and more without paying it all
            upfront. Talk to us about a plan that fits your budget.
          </p>
          <Link href="/contact" className="neu-btn px-8 py-3.5 text-sm font-semibold text-red">
            Ask about a payment plan
          </Link>
        </div>
      </Section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-navy">{value}</p>
      <p className="text-xs uppercase tracking-wide text-mist">{label}</p>
    </div>
  );
}

function RoofBadge() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L22 12H17V21H7V12H2L12 2Z" fill="#c8202b" />
      <path d="M12 6L18 12H15V18H9V12H6L12 6Z" fill="#182848" />
    </svg>
  );
}
