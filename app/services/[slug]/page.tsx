import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — Frank Realtors`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
        <Link href="/services" className="text-sm font-medium text-mist transition hover:text-red">
          ← All services
        </Link>
        <Reveal>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-display text-5xl text-gold">{service.number}</span>
              <h1 className="mt-2 font-display text-5xl text-navy sm:text-6xl">{service.name}</h1>
              <p className="mt-3 text-lg italic text-red">{service.tagline}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal direction="left">
            <div className="neu-raised space-y-5 p-8 sm:p-10">
              {service.description.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="neu-card p-8">
              <h2 className="font-display text-2xl text-navy">What's included</h2>
              <ul className="mt-5 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="arrow-bullet text-sm text-ink">
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="neu-btn mt-7 flex items-center justify-center px-6 py-3 text-sm font-semibold text-red"
              >
                Enquire about this service
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Get started" title="Tell us what you need" className="pt-4!">
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>

      <Section eyebrow="Also offered" title="Related services" className="pt-4!">
        <div className="grid gap-6 sm:grid-cols-3">
          {otherServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
