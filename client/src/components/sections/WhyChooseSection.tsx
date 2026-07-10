import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Heart, Award } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantia de sucesso",
    description:
      "Trabalhamos para que cada detalhe do seu evento saia exatamente como planejado.",
  },
  {
    icon: Heart,
    title: "Satisfação garantida",
    description:
      "Comprometidos em superar expectativas e tornar seu evento inesquecível.",
  },
  {
    icon: Award,
    title: "Profissionalismo em 1º lugar",
    description:
      "Atendimento personalizado, com cada detalhe planejado com antecedência.",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.crowd}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container relative" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.28em] text-primary mb-4">
            Confiança
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Por que escolher a Zero61
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-500">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-foreground/60 font-body leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.blockquote
          className="max-w-3xl mx-auto text-center border-t border-primary/20 pt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-body text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
            "Encaixou certinho tudo o que a gente precisava: cada música no
            momento certo e o pessoal vibrando até agora. A festa vai acabar e eu
            vou pagar a hora extra com orgulho!"
          </p>
          <footer className="mt-6 font-display text-sm uppercase tracking-widest text-foreground/50">
            Daniel e Jéssika — Noivos
          </footer>
        </motion.blockquote>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-primary/40 text-foreground font-display uppercase text-lg tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Fale conosco agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
