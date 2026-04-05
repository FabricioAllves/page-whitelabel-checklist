"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "🗂️",
    title: "Crie tarefas e checklists de controle",
    description:
      "Configure os padroes operacionais da sua empresa: etapas obrigatorias, criterios de validacao, campos de evidencia e regras de conformidade.",
  },
  {
    number: "02",
    emoji: "👷",
    title: "Equipe executa no campo",
    description:
      "O tecnico acessa a tarefa no app, segue o fluxo guiado, registra fotos, GPS e assina digitalmente — mesmo sem sinal de internet.",
  },
  {
    number: "03",
    emoji: "✅",
    title: "Sistema valida e alerta inconsistencias",
    description:
      "Cada etapa e validada automaticamente. Desvios do padrao geram alertas em tempo real para o gestor, com evidencia e localizacao do problema.",
  },
  {
    number: "04",
    emoji: "📊",
    title: "Gestor audita e decide com dados",
    description:
      "O dashboard consolida tudo: status por equipe, indicadores de conformidade, historico auditavel e relatorios prontos para apresentar.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-contrast py-24">
      <div className="shell px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Como funciona
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Do planejamento a auditoria,{" "}
            <span className="gradient-text">sem lacuna no controle</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cada etapa foi desenhada para garantir que o que foi planejado
            foi realmente executado — com evidencia, rastro e visibilidade total.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-20 hidden h-px lg:block">
            <div
              className="mx-auto h-px"
              style={{
                width: "75%",
                background:
                  "linear-gradient(90deg, transparent, rgba(34,197,94,0.22) 15%, rgba(22,163,74,0.28) 50%, rgba(255,255,255,0.2) 85%, transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="relative mb-6">
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[26px] border border-white/[0.12] bg-white/[0.06] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                    <span className="text-3xl">{step.emoji}</span>
                  </div>
                  <div
                    className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-[#08111d]"
                    style={{ background: "linear-gradient(135deg, #bbf7d0, #22c55e)" }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#16a34a]">
                  Passo {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#0f172a]">{step.title}</h3>
                <p className="max-w-[230px] text-sm leading-7 text-[#55657e]">{step.description}</p>

                {i < steps.length - 1 && <div className="mt-4 text-2xl text-slate-300 lg:hidden">↓</div>}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#cta" className="secondary-button text-sm">
            Agendar demonstracao <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
