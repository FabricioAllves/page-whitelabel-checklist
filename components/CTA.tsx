"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const trustBadges = [
  "14 dias gratis",
  "Sem cartao de credito",
  "Setup em 24h",
  "LGPD ready",
];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cta" className="section-contrast relative overflow-hidden py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.10), transparent 30%), radial-gradient(circle at 20% 30%, rgba(134,239,172,0.12), transparent 26%)",
        }}
      />

      <div className="shell relative z-10 px-4 sm:px-6">
        <div className="panel-light mx-auto max-w-4xl rounded-[28px] px-5 py-8 text-center sm:rounded-[36px] sm:px-10 sm:py-14">
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Proxima etapa
          </motion.p>

          <motion.h2
            className="mx-auto max-w-3xl text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Veja na pratica como sua equipe passa a operar com controle real
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#55657e] sm:mt-5 sm:text-lg sm:leading-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Em uma demonstracao guiada, mostramos como o sistema valida execucoes,
            detecta inconsistencias e gera visibilidade total para gestores — com os
            seus proprios fluxos operacionais.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-emerald-300/40 bg-emerald-50 px-8 py-4 text-base font-semibold text-emerald-700">
                Solicitacao recebida. Entraremos em contato em breve.
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="seu@empresa.com"
                  required
                  className="flex-1 rounded-full border border-emerald-900/10 bg-white px-6 py-4 text-sm font-medium text-[#0f172a] placeholder:text-[#9dafb8] outline-none focus:border-[#22c55e]"
                />
                <button type="submit" className="primary-button w-full whitespace-nowrap text-sm sm:w-auto">
                  Agendar demonstracao
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-emerald-900/10 bg-emerald-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#15803d]"
              >
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
