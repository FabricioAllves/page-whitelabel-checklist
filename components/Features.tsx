"use client";

import { motion } from "framer-motion";

const features = [
  {
    eyebrow: "01",
    title: "Validacao automatica de execucao",
    description:
      "O sistema verifica se cada etapa foi concluida corretamente, com base em regras definidas. Sem validacao manual, sem margem para omissao.",
    accent: "#16a34a",
  },
  {
    eyebrow: "02",
    title: "Registro com evidencia fotografica e GPS",
    description:
      "Cada atividade e documentada com foto, localizacao e timestamp. A prova de execucao fica vinculada ao registro — imutavel e auditavel.",
    accent: "#15803d",
  },
  {
    eyebrow: "03",
    title: "Alertas automaticos de inconsistencia",
    description:
      "Quando algo foge do padrao esperado, o sistema alerta o gestor em tempo real. O erro e identificado antes de virar retrabalho ou incidente.",
    accent: "#ef4444",
  },
  {
    eyebrow: "04",
    title: "Dashboard com visibilidade total da operacao",
    description:
      "Gestores deixam de esperar planilhas no fim do dia. Status por equipe, regiao e tecnico ficam visiveis em tempo real, com filtros e indicadores.",
    accent: "#166534",
  },
  {
    eyebrow: "05",
    title: "Auditoria automatica e trilha de evidencias",
    description:
      "Cada acao e registrada com responsavel, horario e localizacao. Auditorias internas e externas se tornam simples, rapidas e inquestaveis.",
    accent: "#0f766e",
  },
  {
    eyebrow: "06",
    title: "Nao conformidades viram planos de acao",
    description:
      "Inconsistencias detectadas se convertem automaticamente em planos CAPA — com responsavel, prazo e evidencia de resolucao. Ciclo fechado.",
    accent: "#f97316",
  },
  {
    eyebrow: "07",
    title: "Controle fino por equipe, regiao e perfil",
    description:
      "Gestor, tecnico e auditor enxergam apenas o que precisam. Permissoes granulares garantem governanca sem comprometer a agilidade operacional.",
    accent: "#4ade80",
  },
  {
    eyebrow: "08",
    title: "Relatorios que se geram automaticamente",
    description:
      "O sistema consolida dados de campo em relatorios estruturados, prontos para compartilhar com clientes, diretoria ou orgaos reguladores.",
    accent: "#22c55e",
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
            Como o sistema resolve
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#152033] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Controle e auditoria{" "}
            <span className="gradient-text">de ponta a ponta</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cada recurso foi desenhado para eliminar uma fonte especifica de erro,
            risco ou falta de visibilidade nas operacoes de campo.
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
