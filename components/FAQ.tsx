"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como funciona o modo offline?",
    answer:
      "O app baixa todos os checklists, tarefas e configuracoes antes do tecnico entrar em campo. Na ausencia de sinal, tudo funciona normalmente — preenchimento, foto, GPS e assinatura. Quando a conexao retorna, a sincronizacao acontece automaticamente em segundo plano, sem interrupcao da operacao.",
  },
  {
    question: "Quanto tempo leva para colocar em producao?",
    answer:
      "Em menos de 24 horas montamos um piloto funcional com a sua marca, seus templates de checklist e os primeiros usuarios configurados. O onboarding e guiado e nao depende de time tecnico da sua empresa.",
  },
  {
    question: "Posso usar a minha propria marca no app?",
    answer:
      "Sim. O whitelabel cobre nome do app, logo, cores, tipografia e dominio. Cada tenant pode ter uma identidade visual propria, ideal para empresas que revendem o produto ou querem manter consistencia de marca para seus clientes.",
  },
  {
    question: "O que e CAPA e como funciona na plataforma?",
    answer:
      "CAPA significa Acoes Corretivas e Preventivas. Quando um checklist identifica uma nao conformidade, o sistema gera automaticamente um plano de acao rastreavel com responsavel, prazo e evidencia de resolucao. O gestor acompanha o ciclo completo sem depender de e-mail ou planilha.",
  },
  {
    question: "A plataforma se integra com outros sistemas?",
    answer:
      "Sim. O plano Pro inclui API REST e webhooks para integracao com ERP, BI, sistemas de manutencao (CMMS) e qualquer ferramenta que consuma dados via HTTP. O plano Enterprise inclui suporte a integracoes customizadas e assistencia tecnica especializada.",
  },
  {
    question: "Funciona em qualquer dispositivo?",
    answer:
      "O app mobile roda em Android e iOS. O painel de gestao e acessivel via browser em qualquer dispositivo. Nao ha requisito de hardware especifico — o tecnico usa o celular que ja tem.",
  },
  {
    question: "Como funciona o periodo de avaliacao?",
    answer:
      "Sao 14 dias com acesso completo ao plano escolhido, sem cartao de credito. Durante esse periodo voce tem acesso ao onboarding guiado e ao suporte para garantir que o piloto saia com a sua realidade operacional.",
  },
  {
    question: "Quais certificacoes ou padroes de seguranca a plataforma atende?",
    answer:
      "A plataforma e LGPD ready, com dados armazenados em infraestrutura brasileira. Os fluxos de checklist suportam exigencias de ISO 9001, HACCP, NR-10, NR-35 e outros padroes regulatorios comuns em operacoes criticas.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#e2e8f0] last:border-none"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-semibold text-[#152033] sm:text-lg">{faq.question}</span>
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d1dae6] bg-[#f1f5f9] text-sm font-bold text-[#6b7b91] transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-7 text-[#55657e] sm:text-base sm:leading-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="section-light py-24">
      <div className="shell px-4 sm:px-6">
        <div className="mb-14 text-center">
          <motion.p
            className="eyebrow eyebrow-light mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Duvidas frequentes
          </motion.p>
          <motion.h2
            className="mb-4 text-4xl font-semibold tracking-[-0.04em] text-[#152033] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Perguntas que surgem antes de decidir
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-[17px] leading-8 text-[#55657e]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Se ainda restar alguma duvida apos a leitura, o time esta disponivel para uma conversa direta.
          </motion.p>
        </div>

        <motion.div
          className="panel-light mx-auto max-w-3xl divide-y divide-[#dfe5ef] rounded-[32px] px-6 sm:px-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
