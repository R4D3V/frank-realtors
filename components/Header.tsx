"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { services } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/land", label: "Land Available" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl neu-raised-sm">
            <Image src="/logo.png" alt="Frank Realtors" fill sizes="48px" className="object-cover" priority />
          </span>
          <span className="font-display text-2xl leading-none text-navy sm:text-3xl">
            Frank <span className="text-red">Realtors</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:text-red"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:text-red"
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:text-red"
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="neu-card grid gap-1 p-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-xl px-3 py-2 text-sm font-bold text-navy transition hover:bg-base hover:text-red hover:neu-pressed"
                    >
                      <span className="mr-2 text-xs text-gold">{s.number}</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/land"
            className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy transition hover:text-red"
          >
            Land Available
          </Link>
          <Link
            href="/contact"
            className="neu-btn ml-3 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy"
          >
            Contact
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="neu-raised-sm flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-base-dark/40 px-5 pb-6 md:hidden">
          <nav className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="neu-raised-sm px-4 py-3 text-sm font-bold uppercase tracking-wide text-navy"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-1 text-xs font-bold uppercase tracking-wide text-mist">
              Services
            </p>
            <div className="grid grid-cols-1 gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="neu-pressed px-4 py-2.5 text-sm font-bold text-navy"
                >
                  <span className="mr-2 text-xs text-gold">{s.number}</span>
                  {s.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
