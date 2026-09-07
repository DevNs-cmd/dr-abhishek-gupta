import Link from "next/link";
import Image from "next/image";
import type { Professor } from "@/lib/types";

interface FooterProps {
  professor: Professor;
}

const footerLinks = {
  Navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Study Materials", href: "/notes" },
    { label: "YouTube Lectures", href: "/lectures" },
    { label: "Research", href: "/research" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  "Academic Domains": [
    { label: "Python & Django", href: "/notes?subject=Python" },
    { label: "DBMS & SQL", href: "/notes?subject=DBMS" },
    { label: "Internet of Things", href: "/notes?subject=IoT" },
    { label: "C++ Programming", href: "/notes?subject=C++" },
    { label: "Power BI Analytics", href: "/notes?subject=Power+BI" },
    { label: "Computer Science", href: "/notes?subject=Computer+Science" },
  ],
};

export function Footer({ professor }: FooterProps) {
  return (
    <footer className="bg-white/60 backdrop-blur-2xl border-t border-white/80 pt-16 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-black/[0.05]">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm shrink-0">
                <Image
                  src={professor.photo}
                  alt={professor.name}
                  fill
                  className="object-cover object-top"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="font-bold text-zinc-900 text-[1rem] tracking-tight">{professor.name}</p>
                <p className="text-[0.72rem] text-indigo-600 font-semibold tracking-wide">
                  Academic &bull; Technology &bull; Learning
                </p>
              </div>
            </div>
            <p className="text-zinc-500 text-[0.875rem] leading-relaxed max-w-sm">
              {professor.shortBio}
            </p>
            <p className="text-[0.8rem] text-zinc-400 font-medium">
              {professor.institution}
            </p>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[0.75rem] font-bold text-zinc-900 uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.85rem] text-zinc-500 hover:text-zinc-950 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[0.78rem] text-zinc-400 order-2 sm:order-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {professor.name}. Associated with New Delhi Institute of Management.
          </p>

          {/* AlgoForce AI — Technology Platform Partner */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 order-1 sm:order-2">
            <span className="text-[0.78rem] text-zinc-400 font-medium">Powered by</span>
            <a
              href="https://www.algoforceaii.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white border border-zinc-200/90 shadow-xs hover:shadow-sm hover:border-zinc-300 transition-all duration-200"
              title="Visit AlgoForce AI (www.algoforceaii.com)"
            >
              <Image
                src="/algoforce.png"
                alt="AlgoForce AI Logo"
                width={80}
                height={20}
                className="h-4.5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                style={{ mixBlendMode: "multiply" }}
              />
              <span className="text-[0.82rem] font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                AlgoForce AI
              </span>
              <span className="text-[0.72rem] text-zinc-400 font-medium group-hover:text-blue-600 transition-colors hidden sm:inline">
                www.algoforceaii.com
              </span>
              <span className="text-[0.7rem] text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
