"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 70,
    prefix: "",
    suffix: "%",
    label: "reducao de retrabalho",
    description: "menos servicos refeitos apos implantacao do controle sistematizado",
    color: "#16a34a",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "execucoes auditadas",
    description: "cada tarefa documentada com evidencia, GPS e responsavel identificado",
    color: "#15803d",
  },
  {
    value: 3,
    prefix: "",
    suffix: "x",
    label: "mais velocidade em relatorios",
    description: "relatorios de conformidade gerados automaticamente, sem esforco manual",
    color: "#0f766e",
  },
  {
    value: 0,
    prefix: "",
    suffix: "",
    label: "relatorios manuais",
    description: "tudo registrado e consolidado diretamente pelo sistema em campo",
    color: "#166534",
  },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const display = useTransform(spring, (v) =>
    `${prefix}${Math.round(v)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref} className="tabular-nums">{display}</motion.span>;
}

export default function Stats() {
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
            Resultados comprovados
          </motion.p>
          <motion.h2
            className="text-4xl font-semibold tracking-[-0.04em] text-[#152033] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Controle que se traduz em{" "}
            <span className="gradient-text">resultado de negocio</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="panel-light rounded-[30px] p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: stat.color }}>
                indicador
              </p>
              <div className="mt-4 text-5xl font-semibold" style={{ color: stat.color }}>
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#152033]">{stat.label}</p>
              <p className="mt-2 text-sm leading-7 text-[#55657e]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
