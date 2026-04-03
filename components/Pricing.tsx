"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Para validar rapido com uma equipe enxuta",
    price: "R$ 490",
    period: "/mês",
    description: "Base offline-first para operacoes que precisam sair da planilha sem virar projeto enorme.",
    highlighted: false,
    badge: null,
    cta: "Comecar piloto",
    features: [
      "Até 10 técnicos ativos",
      "5 templates de checklist",
      "Offline-first completo",
      "Sincronização automática",
      "Dashboard essencial",
      "Suporte por email",
    ],
  },
  {
    name: "Pro",
    tagline: "Para vender uma operacao com cara de produto premium",
    price: "R$ 1.490",
    period: "/mês",
    description: "Camada white label, analytics e governanca para empresas em crescimento operacional.",
    highlighted: true,
    badge: "Mais escolhido",
    cta: "Agendar demo",
    features: [
      "Até 100 técnicos ativos",
      "Templates ilimitados",
      "Dashboard avançado em tempo real",
      "Whitelabel completo",
      "API e webhooks",
      "Suporte prioritário",
      "Relatórios customizados",
      "Permissões granulares",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Para operacoes criticas, multiunidade ou reguladas",
    price: "Sob consulta",
    period: "",
    description: "Infraestrutura dedicada, SLA, suporte especializado e fluxos moldados para contexto corporativo.",
    highlighted: false,
    badge: null,
    cta: "Falar com vendas",
    features: [
      "Técnicos ilimitados",
      "Whitelabel multi-tenant",
      "Dashboard enterprise e BI",
      "SLA 99.9%",
      "Suporte dedicado 24/7",
      "Deploy em cloud privada",
      "Integrações avançadas",
      "Rollout assistido",
    ],
  },
];

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border h-full ${
        plan.highlighted
          ? "border-[#f4b860]/40 bg-[#152033] text-white shadow-[0_30px_80px_rgba(12,19,34,0.22)]"
          : "panel-light"
      }`}
    >
      {plan.badge && (
        <div className="absolute left-0 right-0 top-0 flex justify-center">
          <div className="rounded-b-2xl bg-[#f4b860] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#08111d]">
            {plan.badge}
          </div>
        </div>
      )}
      <div className={`p-6 sm:p-8 ${plan.badge ? "pt-10 sm:pt-11" : ""}`}>
        <p
          className="text-xs font-bold uppercase tracking-[0.22em]"
          style={{ color: plan.highlighted ? "#f4b860" : "#6b7b91" }}
        >
          {plan.name}
        </p>
        <p className={`mt-2 text-sm ${plan.highlighted ? "text-[#b8c7db]" : "text-[#55657e]"}`}>
          {plan.tagline}
        </p>
        <div className="mt-6 flex items-end gap-1">
          <span
            className={`font-semibold leading-none ${
              plan.price === "Sob consulta" ? "text-2xl sm:text-3xl" : "text-[2.6rem] sm:text-5xl"
            }`}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className={`mb-1 text-sm ${plan.highlighted ? "text-[#93a4c4]" : "text-[#6b7b91]"}`}>
              {plan.period}
            </span>
          )}
        </div>
        <p className={`mt-4 text-sm leading-7 ${plan.highlighted ? "text-[#cbd7e7]" : "text-[#55657e]"}`}>
          {plan.description}
        </p>
        <a
          href="#cta"
          className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold ${
            plan.highlighted ? "primary-button" : "border border-[#d9e0eb] bg-white text-[#152033]"
          }`}
        >
          {plan.cta}
        </a>
        <div className={`my-8 h-px ${plan.highlighted ? "bg-white/10" : "bg-[#dfe5ef]"}`} />
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div
                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: plan.highlighted ? "rgba(244,184,96,0.12)" : "rgba(20,24,35,0.05)",
                }}
              >
                <Check size={12} color={plan.highlighted ? "#f4b860" : "#152033"} />
              </div>
              <span className={`text-sm leading-7 ${plan.highlighted ? "text-[#e7eef8]" : "text-[#44546c]"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [active, setActive] = useState(1); // começa no Pro (destacado)
  const [direction, setDirection] = useState(1);

  function goTo(index: number) {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }

  return (
    <section id="pricing" className="section-light py-24">
      <div className="shell px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14">
          <motion.p
            className="eyebrow eyebrow-light mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Investimento
          </motion.p>
          <motion.h2
            className="mb-4 text-[2rem] font-semibold tracking-[-0.04em] text-[#152033] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Planos claros para uma proposta mais confiavel
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-base leading-7 text-[#55657e] sm:text-[17px] sm:leading-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A apresentacao do preço também faz parte da percepção de valor. Aqui ela foi tratada como produto, não como tabela genérica.
          </motion.p>
        </div>

        {/* ── Mobile carousel ── */}
        <div className="md:hidden">
          {/* Dots / tab selector */}
          <div className="mb-6 flex items-center justify-center gap-2">
            {plans.map((plan, i) => (
              <button
                key={plan.name}
                onClick={() => goTo(i)}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className="block rounded-full transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.16em] px-3 py-1"
                  style={{
                    background: i === active ? "#152033" : "#f1f5f9",
                    color: i === active ? "#f4b860" : "#94a3b8",
                  }}
                >
                  {plan.name}
                </span>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 100 + "%", opacity: 0 }),
                  center: { x: "0%", opacity: 1 },
                  exit: (d: number) => ({ x: d * -100 + "%", opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50 && active < plans.length - 1) goTo(active + 1);
                  if (info.offset.x > 50 && active > 0) goTo(active - 1);
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <PlanCard plan={plans[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Plano ${plans[i].name}`}
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  background: i === active ? "#152033" : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div className="hidden md:grid grid-cols-3 items-start gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-[#6b7b91]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Todos os planos incluem 14 dias de avaliacao. Sem cartao de credito.
        </motion.p>
      </div>
    </section>
  );
}
