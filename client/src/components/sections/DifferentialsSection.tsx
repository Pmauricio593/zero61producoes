import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Zap, Speaker, Star } from "lucide-react";
import Equalizer from "@/components/Equalizer";

const differentials = [
  {
    icon: Music,
    title: "Repertório Personalizado",
    description:
      "Montamos a playlist do seu casamento com vocês — da música da entrada às músicas que não podem faltar na pista. Sertanejo, pop, MPB, rock e muito mais.",
  },
  {
    icon: Zap,
    title: "Energia na Pista",
    description:
      "Nossos músicos sabem ler a festa e envolver os convidados. Do primeiro slow ao último hit, mantemos a pista cheia e a celebração no auge.",
  },
  {
    icon: Speaker,
    title: "Som e Iluminação Profissionais",
    description:
      "Equipamento de ponta para cerimônia, coquetel e festa. Qualidade sonora impecável e produção visual que valoriza cada momento do seu casamento.",
  },
  {
    icon: Star,
    title: "Experiência em Casamentos",
    description:
      "Centenas de casamentos realizados em Brasília e Goiás. Sabemos conduzir cada etapa com pontualidade, elegância e o clima certo para o seu grande dia.",
  },
];

export default function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.55 0.25 260) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <Equalizer bars={8} className="h-6" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Por que somos a escolha dos{" "}
            <span className="text-primary neon-text">Noivos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow" />
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group glass-card rounded-lg p-8 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-500">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-foreground/60 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
