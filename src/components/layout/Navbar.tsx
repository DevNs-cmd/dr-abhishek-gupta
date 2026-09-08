"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import type { Professor } from "@/lib/types";

interface NavbarProps {
  professor: Professor;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Notes", href: "/notes" },
  { label: "Lectures", href: "/lectures" },
  { label: "Research", href: "/research" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ professor }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-4 sm:py-5"
        }`}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ios-glass ${
              scrolled
                ? "shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] border-white/90"
                : "border-white/75"
            }`}
            aria-label="Primary navigation"
          >
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="Dr. Abhishek Gupta — Home"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm flex-shrink-0">
                <Image
                  src={professor.photo}
                  alt={professor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="36px"
                  priority
                />
              </div>
              <div>
                <p className="text-[0.88rem] font-bold text-zinc-900 leading-tight tracking-tight">
                  {professor.name}
                </p>
                <p className="text-[0.68rem] text-zinc-500 leading-tight font-medium hidden sm:block">
                  Academician & Consultant
                </p>
              </div>
            </Link>

            {/* Desktop Nav: iOS Segmented Capsule */}
            <ul className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/[0.04]" role="list">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`px-3.5 py-1.5 text-[0.82rem] rounded-full transition-all duration-200 block ${
                        isActive
                          ? "bg-white text-zinc-950 font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                          : "text-zinc-600 hover:text-zinc-950 font-medium hover:bg-white/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Action CTA + Mobile Trigger */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://www.algoforceaii.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.03] hover:bg-black/[0.06] border border-black/[0.06] text-[0.72rem] transition-all duration-200 group"
                title="Powered by AlgoForce (www.algoforceaii.com)"
              >
                <span className="text-zinc-500 font-normal">Powered by</span>
                <span className="text-[0.78rem] font-extrabold tracking-[-0.02em] leading-none inline-flex items-center">
                  <span className="text-[#072942]">Algo</span>
                  <span className="text-[#9b50f7]">Force</span>
                </span>
                <span className="text-[0.65rem] text-zinc-400 group-hover:text-[#9b50f7] transition-colors">
                  ↗
                </span>
              </a>

              <Link
                href="/notes"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1d1d1f] hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
              >
                <span>Explore</span>
                <ArrowRight size={13} />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full text-zinc-700 hover:bg-black/[0.05] transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-md lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile iOS Sheet Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw] bg-white/95 backdrop-blur-2xl shadow-2xl lg:hidden transition-transform duration-300 ease-out border-l border-white/80 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
              <Image
                src={professor.photo}
                alt={professor.name}
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900">{professor.name}</p>
              <p className="text-[0.7rem] text-zinc-500">Academic Portal</p>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div className="p-4 flex-1 overflow-y-auto space-y-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white font-semibold shadow-sm"
                    : "text-zinc-700 hover:bg-zinc-100/80 font-medium"
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight size={14} className={isActive ? "opacity-100" : "opacity-40"} />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-zinc-100 bg-zinc-50/50 space-y-3">
          <p className="text-[0.75rem] text-zinc-500 font-medium">
            {professor.institution}
          </p>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-2.5 bg-zinc-900 text-white rounded-full text-xs font-semibold shadow-sm"
          >
            Contact / Counseling
          </Link>

          <a
            href="https://www.algoforceaii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-zinc-200/80 shadow-xs text-xs text-zinc-600 hover:text-zinc-950 font-medium transition-colors group"
            title="Powered by AlgoForce (www.algoforceaii.com)"
          >
            <span className="text-zinc-400">Powered by</span>
            <span className="text-[0.88rem] font-extrabold tracking-[-0.02em] leading-none inline-flex items-center">
              <span className="text-[#072942]">Algo</span>
              <span className="text-[#9b50f7]">Force</span>
            </span>
            <span className="text-[0.7rem] text-zinc-400 group-hover:text-[#9b50f7] transition-colors">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}
