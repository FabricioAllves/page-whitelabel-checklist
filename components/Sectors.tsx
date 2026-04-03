"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    icon: "⚡",
    title: "Energia Elétrica",
    description: "Inspecao de subestacoes, redes de distribuicao e manutencao preventiva com rastreabilidade total.",
    accent: "#16a34a",
    tags: ["Conformidade regulatoria", "Evidencia fotografica", "Relatorio de nao conformidade"],
  },
  {
    icon: "💧",
    title: "Saneamento",
    description: "Controle de campo em estacoes de tratamento, redes de abastecimento e obras hidraulicas.",
    accent: "#15803d",
    tags: ["Gestao de equipes", "Offline obrigatorio", "Dashboard em tempo real"],
  },
  {
    icon: "🏗️",
    title: "Construcao Civil",
    description: "Checklists de obra, inspecao de seguranca, RDOs digitais e acompanhamento de progresso.",
    accent: "#166534",
    tags: ["Gestao de obras", "CAPA integrado", "Assinatura digital"],
  },
];

export default function Sectors() {
  return (
    <section className="section-contrast py-24">
      <div className="shell px-4 sm:px-6">
        <div className="mb-14 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Setores atendidos
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Operacoes criticas em qualquer setor
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A plataforma foi construida para ambientes exigentes onde erro operacional tem custo real, independente do setor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="panel-light group relative overflow-hidden rounded-[28px] p-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"
                style={{ background: `radial-gradient(circle at 0% 0%, ${sector.accent}08, transparent 60%)` }}
              />

              <div className="relative">
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                  style={{ background: `${sector.accent}12`, border: `1px solid ${sector.accent}25` }}
                >
                  {sector.icon}
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[#0f172a]">{sector.title}</h3>
                <p className="mb-5 text-sm leading-7 text-[#55657e]">{sector.description}</p>

                <div className="flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: sector.accent, background: `${sector.accent}10`, border: `1px solid ${sector.accent}20` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
