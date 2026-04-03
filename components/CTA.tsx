"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const trustBadges = [
  "LGPD ready",
  "Setup em 24h",
  "Whitelabel completo",
  "14 dias para avaliar",
];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="cta" className="section-dark relative overflow-hidden py-24">
      <div className="absolute inset-0 dots-pattern opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,184,96,0.14), transparent 28%), radial-gradient(circle at 20% 30%, rgba(94,234,212,0.1), transparent 24%)",
        }}
      />

      <div className="shell relative z-10 px-4 sm:px-6">
        <div className="panel-dark mx-auto max-w-4xl rounded-[28px] px-5 py-8 text-center sm:rounded-[36px] sm:px-10 sm:py-14">
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Proxima etapa
          </motion.p>

          <motion.h2
            className="mx-auto max-w-3xl text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Se a operacao precisa parecer mais madura, a interface tambem precisa subir de nivel
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#a8b7d0] sm:mt-5 sm:text-lg sm:leading-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Vamos montar um piloto com sua marca, seus fluxos e um roteiro claro para mostrar valor rapidamente para clientes e equipe interna.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-8 py-4 text-base font-semibold text-emerald-100">
                Solicitação recebida. Entraremos em contato em breve.
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email) {
                    setSubmitted(true);
                  }
                }}
                className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="flex-1 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-medium text-white placeholder:text-[#7e90ad] outline-none focus:border-[#f4b860]"
                />
                <button type="submit" className="primary-button w-full whitespace-nowrap text-sm sm:w-auto">
                  Solicitar demo
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
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#b9c7db]"
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
