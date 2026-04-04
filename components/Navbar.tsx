"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Diferenciais", href: "#features" },
    { label: "Planos", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/88 backdrop-blur-xl border-b border-emerald-900/8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
          : "bg-white/72 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div className="shell px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between py-4 sm:h-[4.75rem] sm:py-5">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-sm font-bold text-[#166534] shadow-[0_10px_24px_rgba(34,197,94,0.12)] sm:h-10 sm:w-10 sm:text-base">
              CF
            </span>
            <span className="text-[0.98rem] font-semibold tracking-[0.14em] uppercase text-[#0f172a] sm:text-[1.08rem] sm:tracking-[0.16em]">
              Check<span className="gradient-text">Field</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 rounded-full border border-emerald-900/8 bg-white/88 px-2 py-1.5 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.95rem] font-semibold text-[#5f7469] hover:bg-emerald-50 hover:text-[#166534]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <a href="#pricing" className="primary-button px-5 py-2.5 text-[0.95rem]">
                Agendar Demo
              </a>
            </div>
            <button
              className="rounded-full border border-emerald-900/10 bg-white p-2.5 text-[#325742] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-emerald-900/8 bg-white/96 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="shell flex flex-col gap-4 px-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-emerald-900/8 px-4 py-3 text-sm font-semibold text-[#234032]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
