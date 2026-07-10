import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

const events = [
  {
    title: "Formaturas",
    description:
      "Trilha sonora para colação de grau e baile, do protocolo à celebração.",
    image: IMAGES.crowd,
  },
  {
    title: "Corporativo",
    description:
      "Profissionalismo e sofisticação para confraternizações e lançamentos.",
    image: IMAGES.cocktail,
  },
  {
    title: "Aniversários",
    description: "Celebrações animadas com música ao vivo de verdade.",
    image: IMAGES.guests,
  },
  {
    title: "Debutantes & Réveillon",
    description:
      "Também presentes em festas de 15 anos, confraternizações e réveillon.",
    image: IMAGES.stage,
  },
];

export default function OtherEventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eventos" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.28em] text-primary mb-4">
            Também atendemos
          </p>
          <div className="flex justify-center mb-4">
            <Equalizer bars={8} className="h-6" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Todos os tipos de eventos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="group relative rounded-lg overflow-hidden glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-foreground/60 font-body leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
