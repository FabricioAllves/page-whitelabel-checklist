"use client";

import { motion } from "framer-motion";

const features = [
  {
    eyebrow: "01",
    title: "Offline como requisito, nao como detalhe",
    description:
      "A equipe executa sem depender de rede. Quando o sinal reaparece, a sincronizacao acontece sem ruído operacional.",
    accent: "#5eead4",
  },
  {
    eyebrow: "02",
    title: "Whitelabel com acabamento de produto proprio",
    description:
      "Marca, cores, permissoes e experiencia adaptadas por tenant para reforcar valor e credibilidade diante do cliente final.",
    accent: "#f4b860",
  },
  {
    eyebrow: "03",
    title: "Checklists que orientam execucao de verdade",
    description:
      "Campos condicionais, foto, GPS, assinatura e validacoes para reduzir erro humano e padronizar a operacao.",
    accent: "#6ea8fe",
  },
  {
    eyebrow: "04",
    title: "Visibilidade executiva em tempo real",
    description:
      "Gestores deixam de esperar planilhas no fim do dia e passam a enxergar status, risco e produtividade em tempo real.",
    accent: "#8b5cf6",
  },
  {
    eyebrow: "05",
    title: "Controle fino de acesso por perfil",
    description:
      "Admin, gestor, tecnico e auditor enxergam apenas o que precisam, com governanca mais clara e menos risco de operacao.",
    accent: "#ff7a59",
  },
  {
    eyebrow: "06",
    title: "Sincronizacao resiliente entre campo e central",
    description:
      "Fluxo bidirecional de dados com menos retrabalho, menos conflito e mais confianca no que chega ao dashboard.",
    accent: "#34d399",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-light py-24">
      <div className="light-grid absolute inset-0 opacity-50" />
      <div className="shell relative px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.p
            className="eyebrow eyebrow-light mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Arquitetura do produto
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#152033] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Recursos desenhados para uma operacao{" "}
            <span className="gradient-text">critica e sofisticada</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Em vez de empilhar features soltas, a plataforma organiza o trabalho de ponta a ponta e melhora a percepcao de maturidade do seu produto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="panel-light group relative overflow-hidden rounded-[30px] p-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 24px 60px ${feature.accent}18` }}
            >
              <div
                className="mb-10 inline-flex rounded-full border px-4 py-2 text-sm font-bold tracking-[0.22em]"
                style={{
                  color: feature.accent,
                  borderColor: `${feature.accent}40`,
                  background: `${feature.accent}10`,
                }}
              >
                {feature.eyebrow}
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-[#152033]">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-7 text-[#55657e]">{feature.description}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
