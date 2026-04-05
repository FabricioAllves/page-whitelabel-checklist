"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Antes nao sabiamos se o servico tinha sido feito ate o cliente ligar reclamando. Hoje o sistema detecta a inconsistencia em tempo real e o gestor age antes de virar problema.",
    name: "Carlos Mendonca",
    role: "Gerente de Operacoes",
    company: "Energisa Distribuicao",
    avatar: "CM",
    avatarColor: "#16a34a",
  },
  {
    quote:
      "Reduzimos o retrabalho em mais de 60% no primeiro trimestre. A validacao automatica eliminou os erros de preenchimento que antes eram descobertos so na auditoria mensal.",
    name: "Renata Oliveira",
    role: "Gerente de Qualidade",
    company: "Sanepar Infraestrutura",
    avatar: "RO",
    avatarColor: "#15803d",
  },
  {
    quote:
      "O dashboard mudou a forma como gerenciamos. Antes esperavamos planilhas no fim do dia. Hoje vejo o status de cada tecnico em tempo real, com evidencia fotografica e localizacao.",
    name: "Fabio Rodrigues",
    role: "Supervisor de Campo",
    company: "Copel Engenharia",
    avatar: "FR",
    avatarColor: "#166534",
  },
];

export default function Testimonials() {
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
            Credibilidade
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#0f172a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Controle que muda a operacao — na pratica
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="panel-light flex flex-col rounded-[30px] p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-5 text-4xl leading-none" style={{ color: `${testimonial.avatarColor}55` }}>
                &ldquo;
              </div>
              <p className="mb-6 flex-1 text-sm leading-7 text-[#44546c]">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${testimonial.avatarColor}, #4ade80)` }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f172a]">{testimonial.name}</p>
                  <p className="text-xs text-[#6b7b91]">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
