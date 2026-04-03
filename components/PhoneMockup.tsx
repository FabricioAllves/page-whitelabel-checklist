"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative select-none" style={{ width: 300, height: 649 }}>
      {/* Outer titanium body */}
      <div
        className="absolute inset-0 rounded-[48px]"
        style={{
          background: "linear-gradient(145deg, #8a8a8e 0%, #6d6d72 30%, #8a8a8e 60%, #5a5a5f 100%)",
          boxShadow:
            "0 60px 120px rgba(0,0,0,0.35), 0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      />
      {/* Inner bezel */}
      <div className="absolute rounded-[44px] overflow-hidden" style={{ inset: 4, background: "#1c1c1e" }}>
        {/* Screen */}
        <div className="absolute rounded-[40px] overflow-hidden" style={{ inset: 3 }}>
          {children}
        </div>
      </div>
      {/* Dynamic Island */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20"
        style={{ top: 16, width: 120, height: 34, background: "#1c1c1e", borderRadius: 20 }}
      />
      {/* Volume Up */}
      <div className="absolute rounded-r-sm" style={{ left: -3, top: 130, width: 4, height: 36, background: "linear-gradient(180deg, #7a7a7e, #5c5c60)" }} />
      {/* Volume Down */}
      <div className="absolute rounded-r-sm" style={{ left: -3, top: 178, width: 4, height: 36, background: "linear-gradient(180deg, #7a7a7e, #5c5c60)" }} />
      {/* Action button */}
      <div className="absolute rounded-r-sm" style={{ left: -3, top: 88, width: 4, height: 28, background: "linear-gradient(180deg, #7a7a7e, #5c5c60)" }} />
      {/* Power button */}
      <div className="absolute rounded-l-sm" style={{ right: -3, top: 148, width: 4, height: 64, background: "linear-gradient(180deg, #7a7a7e, #5c5c60)" }} />
      {/* Screen glare */}
      <div
        className="absolute pointer-events-none z-30"
        style={{ inset: 7, borderRadius: 41, background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)" }}
      />
    </div>
  );
}

const slides = [
  { src: "/preview-form.png", label: "Checklist em campo", callouts: ["📋 Checklist guiado", "📷 Upload de evidencia", "📍 Captura GPS"] },
  { src: "/preview-dash.png", label: "Dashboard do gestor", callouts: ["🔄 Sync em tempo real", "📈 Indicadores ao vivo", "🏢 Visao multi-equipe"] },
  { src: "/preview-detail.png", label: "Detalhe da tarefa", callouts: ["🔴 Prioridade visual", "📊 Progresso inline", "🗂 Historico inline"] },
];

export default function PhoneMockup() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  function goTo(index: number) {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }

  return (
    <section className="section-light overflow-hidden py-24">
      <div className="shell px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            className="eyebrow eyebrow-light mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experiencia mobile
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#152033] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Um app que transmite clareza mesmo no ambiente mais caotico
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A interface do tecnico precisa ser objetiva, confiavel e legivel sob pressao. Veja como o produto se comporta na pratica.
          </motion.p>
        </div>

        {/* ── Mobile carousel (abaixo de sm) ── */}
        <div className="sm:hidden flex flex-col items-center gap-6">
          <div className="relative overflow-hidden w-[300px] h-[649px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 320, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -320, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50 && active < slides.length - 1) goTo(active + 1);
                  if (info.offset.x > 50 && active > 0) goTo(active - 1);
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <IPhoneFrame>
                  <Image
                    src={slides[active].src}
                    alt={slides[active].label}
                    fill
                    className="object-cover object-top"
                    draggable={false}
                  />
                </IPhoneFrame>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Callouts do slide atual */}
          <div className="flex flex-wrap justify-center gap-2">
            {slides[active].callouts.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#d9e4ef] bg-white px-3 py-1.5 text-xs font-semibold text-[#44546c] shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => goTo(i)}
                aria-label={s.label}
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    background: i === active ? "#152033" : "#cbd5e1",
                  }}
                />
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold text-[#55657e]">{slides[active].label}</p>
        </div>

        {/* ── Desktop layout (sm+): 3 phones em perspectiva ── */}
        <div className="hidden sm:flex items-end justify-center gap-6 lg:gap-8">
          {/* Phone secundário esquerdo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ transform: "translateY(36px) scale(0.86)", opacity: 0.75, zIndex: 1 }}
          >
            <IPhoneFrame>
              <Image src={slides[2].src} alt={slides[2].label} fill className="object-cover object-top" />
            </IPhoneFrame>
          </motion.div>

          {/* Phone principal — centro */}
          <motion.div
            className="floating"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ zIndex: 3 }}
          >
            <IPhoneFrame>
              <Image src={slides[0].src} alt={slides[0].label} fill className="object-cover object-top" />
            </IPhoneFrame>
          </motion.div>

          {/* Phone secundário direito */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transform: "translateY(36px) scale(0.86)", opacity: 0.75, zIndex: 1 }}
          >
            <IPhoneFrame>
              <Image src={slides[1].src} alt={slides[1].label} fill className="object-cover object-top" />
            </IPhoneFrame>
          </motion.div>
        </div>

        {/* Callouts desktop */}
        <motion.div
          className="hidden sm:flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {slides.flatMap((s) => s.callouts).map((c) => (
            <span
              key={c}
              className="rounded-full border border-[#d9e4ef] bg-white px-4 py-2 text-sm font-semibold text-[#44546c] shadow-sm"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
