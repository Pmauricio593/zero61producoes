import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

const weddingMoments = [
  {
    title: "Cerimônia",
    description:
      "Música ao vivo para entrar, assinar e emocionar. Violino, teclado, voz e instrumentos escolhidos com carinho para esse momento único.",
    image: IMAGES.ceremony,
  },
  {
    title: "Coquetel",
    description:
      "Ambiente elegante na recepção dos convidados. Repertório refinado que conversa com o clima do seu casamento, do jazz ao pop romântico.",
    image: IMAGES.cocktail,
  },
  {
    title: "Festa",
    description:
      "A pista no auge! Banda completa, energia contagiante e repertório que agrada todas as idades — dos clássicos aos hits atuais.",
    image: IMAGES.party,
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casamentos" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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
            Momentos do{" "}
            <span className="text-primary neon-text">Casamento</span>
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Cuidamos de cada etapa do seu grande dia com a mesma dedicação —
            da cerimônia emocionante à festa que ninguém esquece.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow mt-4" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {weddingMoments.map((moment, index) => (
            <motion.div
              key={moment.title}
              className="group relative rounded-lg overflow-hidden glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {moment.title}
                </h3>
                <p className="text-foreground/60 font-body leading-relaxed mb-4">
                  {moment.description}
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-display uppercase text-sm tracking-wider hover:gap-3 transition-all duration-300"
                >
                  Solicitar Orçamento
                  <span className="text-lg">→</span>
                </a>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          className="text-center text-foreground/50 font-body mt-12 text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Também atendemos{" "}
          <span className="text-foreground/70">
            pré-wedding, brunch pós-casamento e celebrações especiais
          </span>{" "}
          em Brasília, Goiânia e região.
        </motion.p>
      </div>
    </section>
  );
}
