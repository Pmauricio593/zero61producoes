import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

const features = [
  "Repertório personalizado para entrada, cerimônia e valsa",
  "Transição suave entre cerimônia, coquetel e pista",
  "Alinhamento com cerimonialista e demais fornecedores",
  "Som e iluminação discretos, sem competir com a decoração",
];

export default function WeddingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casamentos" className="relative py-24 overflow-hidden bg-card/30">
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-sm uppercase tracking-[0.28em] text-primary mb-4">
              Nossa maior especialidade
            </p>
            <div className="flex mb-4">
              <Equalizer bars={8} className="h-6" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-6">
              Especialistas em casamentos
            </h2>
            <p className="text-foreground/70 font-body text-lg leading-relaxed mb-4">
              Do cerimonial à pista de dança, cuidamos da trilha sonora do seu
              casamento com repertório sob medida para cada etapa, sempre em
              sintonia com o cerimonial e os fornecedores do dia.
            </p>

            <ul className="flex flex-col gap-4 my-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-foreground/80 font-body">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-foreground/70 font-body text-lg leading-relaxed mb-8">
              O repertório passeia por sertanejo, pop, forró, axé, pagode, hits
              internacionais e grandes clássicos que todo mundo conhece e canta
              junto.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display uppercase text-sm tracking-wider rounded neon-glow hover:bg-primary/90 transition-all duration-300"
            >
              Falar sobre meu casamento
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="col-span-2 rounded-lg overflow-hidden">
              <img
                src={IMAGES.reception}
                alt="Noivos com a banda Zero61"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={IMAGES.ceremony}
                alt="Música para cerimônia de casamento"
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={IMAGES.party}
                alt="Festa de casamento com banda ao vivo"
                className="w-full h-44 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
