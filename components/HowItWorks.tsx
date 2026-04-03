"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "🏢",
    title: "Empresa configura",
    description:
      "Marca, acessos, templates e regras operacionais ficam centralizados no painel sem depender de time tecnico.",
  },
  {
    number: "02",
    emoji: "👷",
    title: "Tecnico recebe a tarefa",
    description:
      "No app, a equipe visualiza o que precisa fazer, mesmo em area remota e sem sinal disponivel.",
  },
  {
    number: "03",
    emoji: "📋",
    title: "Executa no campo",
    description:
      "Checklist, foto, GPS e evidencias entram no fluxo com clareza, rastreabilidade e menos margem para erro.",
  },
  {
    number: "04",
    emoji: "✅",
    title: "Sincroniza e gera insight",
    description:
      "Assim que a conexao volta, a operacao sobe para o dashboard e vira decisao em tempo real para o gestor.",
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
            Fluxo operacional
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Da configuracao ao insight, sem quebrar o ritmo da equipe
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cada etapa foi desenhada para reduzir friccao no campo e aumentar a clareza gerencial no escritorio.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-20 hidden h-px lg:block">
            <div
              className="mx-auto h-px"
              style={{
                width: "75%",
                background:
                  "linear-gradient(90deg, transparent, rgba(244,184,96,0.22) 15%, rgba(94,234,212,0.28) 50%, rgba(255,255,255,0.2) 85%, transparent)",
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
                    style={{ background: "linear-gradient(135deg, #fff2c5, #f4b860)" }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f4b860]">
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
          <a href="#pricing" className="secondary-button text-sm">
            Comecar agora <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
