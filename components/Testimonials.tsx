"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Antes perdíamos dados toda vez que o técnico ia para área sem sinal. Com o CheckField, tudo sincroniza automaticamente quando ele volta. Simplesmente funcionou do primeiro dia.",
    name: "Carlos Mendonça",
    role: "Gerente de Operações",
    company: "Energisa Distribuição",
    avatar: "CM",
    avatarColor: "#16a34a",
  },
  {
    quote:
      "O whitelabel foi decisivo. Nossos clientes veem o nosso app, com nossa identidade visual. A plataforma cresceu junto com a gente e continuou parecendo produto premium.",
    name: "Renata Oliveira",
    role: "Diretora de Tecnologia",
    company: "Sanepar Infraestrutura",
    avatar: "RO",
    avatarColor: "#15803d",
  },
  {
    quote:
      "O dashboard em tempo real mudou a forma como gerenciamos. Antes esperávamos planilhas no final do dia. Agora vejo o status de cada técnico no mapa, ao vivo.",
    name: "Fábio Rodrigues",
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
            O produto impressiona porque resolve e porque parece serio
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
