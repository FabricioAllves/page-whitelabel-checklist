"use client";

import { motion } from "framer-motion";

const companies = ["Energisa", "Sabesp", "Vale", "Copel", "Cemig", "Comgás", "Sanepar", "Equatorial"];

export default function LogoStrip() {
  return (
    <section className="section-divider section-dark py-14">
      <div className="shell px-4 sm:px-6">
        <motion.p
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#7083a3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Operacoes de campo em energia, saneamento e infraestrutura
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {companies.map((company, i) => (
            <motion.div
              key={company}
              className="group rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#93a4c4] group-hover:text-white">
                {company}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
