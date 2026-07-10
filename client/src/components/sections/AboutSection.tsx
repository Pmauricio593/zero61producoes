import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="font-display text-5xl md:text-6xl font-bold text-primary neon-text"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {target}
          {suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.55 0.25 260) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.28em] text-primary mb-4">
            Quem somos
          </p>
          <div className="flex justify-center mb-4">
            <Equalizer bars={8} className="h-6" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Energia e sofisticação em cada cerimônia
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={IMAGES.band}
                alt="Zero61 Produções em casamento"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-foreground/70 font-body text-lg leading-relaxed mb-6">
              A Zero61 Produções é referência em música ao vivo para casamentos
              em Brasília e Goiás. Nossa equipe de músicos experientes conduz
              cerimônia, coquetel e festa com sensibilidade, elegância e um
              repertório desenhado para a história de cada casal.
            </p>
            <p className="text-foreground/70 font-body text-lg leading-relaxed mb-8">
              Também levamos essa mesma qualidade para formaturas, eventos
              corporativos e aniversários, sempre adaptando o tom da apresentação
              ao estilo de cada celebração.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Counter target={500} suffix="+" />
                <p className="text-foreground/50 font-body text-sm mt-2 uppercase tracking-wider">
                  Eventos realizados
                </p>
              </div>
              <div className="text-center">
                <Counter target={8} suffix="+" />
                <p className="text-foreground/50 font-body text-sm mt-2 uppercase tracking-wider">
                  Anos de experiência
                </p>
              </div>
              <div className="text-center">
                <Counter target={100} suffix="%" />
                <p className="text-foreground/50 font-body text-sm mt-2 uppercase tracking-wider">
                  Satisfação
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
