"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  {
    id: "admin",
    emoji: "◌",
    title: "Admin",
    tagline: "Orquestra a operacao e a identidade do produto",
    color: "#16a34a",
    benefits: [
      "Configura templates, tenants e fluxos de aprovacao",
      "Gerencia usuarios e permissoes sem depender de deploy",
      "Personaliza branding por cliente com acabamento white label",
      "Consolida dados para compliance, BI e auditoria",
      "Cria padroes operacionais reutilizaveis entre equipes",
      "Define a governanca de rollout e atualizacao",
    ],
  },
  {
    id: "gestor",
    emoji: "△",
    title: "Gestor",
    tagline: "Transforma execucao de campo em decisao em tempo real",
    color: "#15803d",
    benefits: [
      "Distribui tarefas e acompanha progresso por regiao",
      "Recebe alertas de nao conformidade e gargalos",
      "Visualiza indicadores operacionais sem esperar planilha",
      "Aprova checklists e evidencias com mais contexto",
      "Compara times, tecnicos e janelas de atendimento",
      "Escala processos com visibilidade centralizada",
    ],
  },
  {
    id: "tecnico",
    emoji: "□",
    title: "Tecnico",
    tagline: "Opera com clareza, mesmo em ambientes de alta pressao",
    color: "#166534",
    benefits: [
      "Recebe tarefas offline com contexto e prioridade visual",
      "Preenche checklist com foto, GPS e assinatura",
      "Segue fluxo guiado para reduzir erro operacional",
      "Consulta historico e recorrencias sem retrabalho",
      "Sincroniza automaticamente quando a conexao volta",
      "Mantem produtividade mesmo em area remota",
    ],
  },
  {
    id: "viewer",
    emoji: "◇",
    title: "Auditoria",
    tagline: "Acompanha sem interferir na execucao",
    color: "#4ade80",
    benefits: [
      "Consulta resultados em modo somente leitura",
      "Acessa trilha de evidencias com rastreabilidade",
      "Visualiza o dashboard com filtros e historico",
      "Exporta relatorios para compliance e cliente final",
      "Reduz dependencias de status informal por mensagem",
      "Ganha transparencia sem comprometer governanca",
    ],
  },
];

export default function RolesBenefits() {
  const [activeRole, setActiveRole] = useState(roles[0].id);
  const current = roles.find((role) => role.id === activeRole)!;

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
            Perfis e governanca
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Cada camada da operacao enxerga exatamente o que precisa
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            O produto fica mais profissional quando permissao, contexto e experiencia andam juntos. Aqui isso nao e detalhe de backlog.
          </motion.p>
        </div>

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                activeRole === role.id
                  ? "bg-white text-[#0f172a] shadow-sm"
                  : "border-emerald-900/10 bg-white/60 text-[#55657e] hover:text-[#0f172a]"
              }`}
              style={
                activeRole === role.id
                  ? { borderColor: `${role.color}40`, boxShadow: `0 0 0 1px ${role.color}20 inset` }
                  : {}
              }
            >
              <span className="mr-2" style={{ color: role.color }}>
                {role.emoji}
              </span>
              {role.title}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            className="panel-light mx-auto max-w-4xl overflow-hidden rounded-[34px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="border-b border-[#e2e8f0] p-8"
              style={{
                background: `linear-gradient(135deg, ${current.color}08 0%, rgba(255,255,255,0.6) 60%)`,
              }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: current.color }}>
                    Camada de acesso
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#0f172a]">{current.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-7 text-[#55657e]">{current.tagline}</p>
                </div>
                <div
                  className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[28px] border border-emerald-900/10 text-4xl"
                  style={{ color: current.color, background: `${current.color}10` }}
                >
                  {current.emoji}
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-8 sm:grid-cols-2">
              {current.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="rounded-[24px] border border-emerald-900/8 bg-white px-5 py-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  <div className="mb-3 h-1 w-14 rounded-full" style={{ background: current.color }} />
                  <span className="text-sm leading-7 text-[#44546c]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
