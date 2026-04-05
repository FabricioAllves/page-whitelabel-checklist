"use client";

import { motion } from "framer-motion";

const pains = [
  {
    icon: "📋",
    title: "Relatorios manuais nao garantem execucao",
    description:
      "Planilhas e fotos no WhatsApp nao provam que o servico foi feito corretamente. Qualquer dado pode ser manipulado ou simplesmente esquecido.",
    accent: "#ef4444",
  },
  {
    icon: "🔁",
    title: "Erros no campo viram retrabalho caro",
    description:
      "Sem padronizacao e validacao automatica, o mesmo erro se repete. O custo do retrabalho — em tempo, dinheiro e reputacao — e alto e invisivel.",
    accent: "#f97316",
  },
  {
    icon: "👁️",
    title: "Gestores operam no escuro",
    description:
      "Nao ha visibilidade em tempo real. O gestor so descobre o problema quando ja e tarde — depois do cliente reclamar ou do erro virar incidente.",
    accent: "#eab308",
  },
  {
    icon: "🔍",
    title: "Auditoria e impossivel sem rastro",
    description:
      "Sem registro estruturado de evidencias, localizar responsaveis, reconstruir o historico ou apresentar conformidade para um auditor externo e um pesadelo.",
    accent: "#8b5cf6",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-contrast py-24">
      <div className="shell px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            O problema real
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sem controle real,{" "}
            <span className="gradient-text">o risco e invisivel</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empresas com equipes externas sofrem com os mesmos problemas ha anos.
            O maior deles nao e a falta de ferramenta — e a falta de visibilidade
            sobre o que realmente acontece em campo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              className="panel-light group relative overflow-hidden rounded-[28px] p-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${pain.accent}06, transparent 60%)`,
                }}
              />
              <div className="relative flex items-start gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                  style={{
                    background: `${pain.accent}10`,
                    border: `1px solid ${pain.accent}20`,
                  }}
                >
                  {pain.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0f172a]">
                    {pain.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#55657e]">
                    {pain.description}
                  </p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pain.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bridge to solution */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex flex-col items-center gap-3">
            <p className="text-base font-semibold text-[#0f172a]">
              Existe uma forma mais inteligente de operar.
            </p>
            <a href="#features" className="secondary-button text-sm">
              Ver como o sistema resolve isso <span>↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
