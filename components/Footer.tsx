import { Code2, Globe, Link2 } from "lucide-react";

const footerLinks = {
  Produto: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Como funciona", href: "#how-it-works" },
    { label: "Preços", href: "#pricing" },
  ],
  Empresa: [
    { label: "Sobre", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Parcerias", href: "#" },
  ],
  Legal: [
    { label: "Termos", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Link2, href: "#", label: "X" },
  { icon: Code2, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="section-divider section-dark pt-16 pb-8">
      <div className="shell px-4 sm:px-6">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-[#fff7e6]">
                CF
              </span>
              <span className="text-lg font-semibold uppercase tracking-[0.18em] text-white">
                Check<span className="gradient-text">Field</span>
              </span>
            </a>
            <p className="mb-6 text-sm leading-7 text-[#93a4c4]">
              Plataforma offline-first e white label para transformar operacoes de campo em uma experiencia mais profissional, rastreavel e confiavel.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#b9c7db] hover:text-white"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#6f83a4]">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#b9c7db] hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row">
          <p className="text-xs text-[#7083a3]">
            &copy; {new Date().getFullYear()} CheckField. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#93a4c4]">
            <span className="h-2 w-2 rounded-full bg-[#5eead4] shadow-[0_0_12px_rgba(94,234,212,0.8)]" />
            Operacao pronta para campo e escritorio
          </div>
        </div>
      </div>
    </footer>
  );
}
