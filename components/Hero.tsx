"use client";

import { motion } from "framer-motion";

const orbitBadges = [
  { label: "Offline sem friccao", top: "18%", left: "5%", delay: 0 },
  { label: "White label operacional", top: "28%", right: "6%", delay: 0.3 },
  { label: "Sincronizacao resiliente", top: "72%", left: "7%", delay: 0.6 },
  { label: "Dashboards em tempo real", top: "62%", right: "8%", delay: 0.9 },
];

const trustBadges = [
  { value: "24h", label: "para liberar um piloto funcional" },
  { value: "0", label: "tarefas perdidas em zonas sem sinal" },
  { value: "100%", label: "marca, fluxos e permissoes por tenant" },
];

const checklistItems = [
  { label: "Inspecao de equipamentos EPI", done: true },
  { label: "Verificacao de pressao hidraulica", done: true },
  { label: "Registro fotografico do local", done: true },
  { label: "Assinatura do responsavel", done: false },
  { label: "Relatorio de nao conformidade", done: false },
];

export default function Hero() {
  return (
    <section className="hero-stage section-dark relative flex min-h-[100svh] flex-col overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(94,234,212,0.16), transparent 24%), radial-gradient(circle at 82% 18%, rgba(244,184,96,0.18), transparent 18%), radial-gradient(circle at 50% 78%, rgba(94,234,212,0.09), transparent 26%)",
        }}
      />
      <div className="hero-mesh absolute inset-0 opacity-70 pointer-events-none" />
      <div className="industrial-glow h-44 w-44 bg-[#5eead4]/15 left-[8%] top-28" />
      <div className="industrial-glow h-56 w-56 bg-[#f4b860]/18 right-[6%] top-20" />

      {orbitBadges.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-[#dbe6f5] uppercase xl:block"
          style={{
            top: item.top,
            left: "left" in item ? item.left : undefined,
            right: "right" in item ? item.right : undefined,
          }}
          animate={{
            opacity: [0.55, 1, 0.55],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { repeat: Infinity, duration: 4, delay: item.delay },
            y: { repeat: Infinity, duration: 4, delay: item.delay, ease: "easeInOut" },
          }}
        >
          {item.label}
        </motion.div>
      ))}

      {/* Spacer exato da navbar fixa */}
      <div className="h-[4.75rem] shrink-0" />

      <div className="relative z-10 flex flex-1 items-center py-12 sm:py-20 lg:py-28">
        <div className="shell px-4 sm:px-6">
          <div className="hero-layout grid items-center gap-10 xl:gap-14 lg:grid-cols-[minmax(0,0.98fr)_minmax(340px,0.74fr)]">

            {/* LEFT — copy */}
            <div className="hero-copy max-w-[43rem]">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 max-w-full eyebrow sm:mb-8"
              >
                <span className="h-2 w-2 rounded-full bg-[#5eead4] shadow-[0_0_14px_rgba(94,234,212,0.8)]" />
                Plataforma para operacoes criticas em campo
              </motion.div>

              <motion.h1
                className="hero-title max-w-[11ch] text-[2.95rem] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:max-w-[13.2ch] sm:text-[4.4rem] lg:text-[6rem] xl:text-[6.8rem]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Gestao de campo
                <span className="block gradient-text">mais clara e profissional.</span>
              </motion.h1>

              <motion.p
                className="hero-description mt-5 max-w-[34rem] text-[1rem] leading-8 text-[#9dafcb] sm:mt-7 sm:max-w-[38rem] sm:text-[1.1rem] sm:leading-[1.85] lg:text-[1.22rem]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Checklists offline-first, aplicativo whitelabel e acompanhamento em tempo real para equipes que precisam operar bem no campo e transmitir mais confianca para clientes e gestores.
              </motion.p>

              {/* Stats antes dos CTAs */}
              <motion.div
                className="hero-stats mt-8 hidden gap-3 sm:grid sm:grid-cols-3 lg:mt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="panel-dark hero-stat-card rounded-[24px] p-4 sm:p-5">
                    <div className="text-[1.7rem] font-semibold text-white sm:text-[1.85rem]">{badge.value}</div>
                    <p className="mt-1.5 text-sm leading-6 text-[#93a4c4]">{badge.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs abaixo dos stats */}
              <motion.div
                className="hero-actions mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <a href="#pricing" className="primary-button w-full text-base sm:w-auto">
                  Solicitar demo guiada
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#how-it-works" className="secondary-button w-full text-base sm:w-auto">
                  Ver experiencia de uso
                </a>
              </motion.div>
            </div>

            {/* RIGHT — checklist card */}
            <motion.div
              className="panel-dark hero-panel relative self-start justify-self-stretch overflow-hidden rounded-[28px] p-5 sm:justify-self-end sm:rounded-[32px] sm:p-7 lg:max-w-md xl:max-w-120 lg:-mt-8 xl:-mt-12"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.13),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(244,184,96,0.10),transparent_26%)]" />
              <div className="relative">

                {/* Header do card */}
                <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
                  <div>
                    <p className="stat-kicker">Execucao em campo</p>
                    <h2 className="mt-1.5 max-w-[12ch] text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.35rem]">
                      Checklist de Inspecao
                    </h2>
                    <p className="mt-0.5 text-[11px] text-[#6f83a4] sm:text-xs">Tecnico: Rafael Souza · Unidade Norte</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 rounded-full border border-[#5eead4]/20 bg-[#5eead4]/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#5eead4] uppercase sm:px-3 sm:text-[11px] sm:tracking-[0.14em]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] shadow-[0_0_6px_#5eead4]" />
                      offline
                    </div>
                    <p className="text-[10px] text-[#6f83a4]">sem sinal — 3 itens salvos</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-4 sm:mb-5">
                  <div className="mb-2 flex items-center justify-between text-xs text-[#93a4c4]">
                    <span>Progresso</span>
                    <span className="font-semibold text-white">3 / 5 itens</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.07]">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ background: "linear-gradient(90deg, #5eead4, #1d4ed8)" }}
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Items do checklist */}
                <div className="space-y-2">
                  {checklistItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className={`flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 text-[13px] sm:px-4 sm:py-3 sm:text-sm ${
                        item.done
                          ? "border-[#5eead4]/20 bg-[#5eead4]/[0.06]"
                          : "border-white/[0.07] bg-white/[0.03]"
                      }`}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                          item.done
                            ? "border-[#5eead4]/40 bg-[#5eead4]/20 text-[#5eead4]"
                            : "border-white/20 bg-white/[0.04] text-transparent"
                        }`}
                      >
                        {item.done ? "✓" : ""}
                      </div>
                      <span className={item.done ? "text-[#dce6f4]" : "text-[#6f83a4]"}>{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer — sync status */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#f4b860]/20 bg-[#f4b860]/[0.06] px-3.5 py-3 sm:mt-5 sm:px-4">
                  <div className="flex items-center gap-2 text-[11px] leading-5 text-[#f4b860] sm:text-xs">
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sincronizara automaticamente ao recuperar sinal
                  </div>
                  <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f4b860]/70">
                    pendente
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
