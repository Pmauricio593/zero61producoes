import { motion } from "framer-motion";
import { IMAGES, WHATSAPP_LINK, LOGO_URL } from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Zero61 Produções em casamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 container flex flex-col items-center text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={LOGO_URL}
            alt="Zero61 Produções"
            className="w-32 md:w-40 lg:w-48 mx-auto mb-8 drop-shadow-2xl rounded-lg"
          />
        </motion.div>

        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Equalizer bars={16} className="h-10" />
        </motion.div>

        <motion.p
          className="text-sm md:text-base text-primary/80 font-display uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Brasília &bull; Goiânia &bull; Região
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Música ao vivo para o dia mais{" "}
          <span className="neon-text text-primary">especial</span> da sua história
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Banda especializada em casamentos, com a sensibilidade que a cerimônia
          pede e a energia que a festa merece. Atendemos também formaturas,
          aniversários e eventos corporativos em Brasília e Goiás.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground font-display uppercase text-lg tracking-wider rounded neon-glow hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Orçamento para casamento
          </a>
          <a
            href="#eventos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#eventos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-white/30 text-white font-display uppercase text-lg tracking-wider rounded hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ver todos os eventos
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
