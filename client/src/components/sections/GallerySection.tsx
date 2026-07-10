import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/constants";
import Equalizer from "@/components/Equalizer";

const galleryImages = [
  { src: IMAGES.violin, alt: "Violino na cerimônia de casamento" },
  { src: IMAGES.stage, alt: "Show da Zero61 no palco" },
  { src: IMAGES.reception, alt: "Noivos cantando com a banda" },
  { src: IMAGES.guests, alt: "Banda e convidados no casamento" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="relative py-24 overflow-hidden">
      <div className="container relative" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.28em] text-primary mb-4">
            Registros
          </p>
          <div className="flex justify-center mb-4">
            <Equalizer bars={8} className="h-6" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Momentos que já embalamos
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Um pouco do que acontece quando a Zero61 sobe ao palco: cerimônias
            emocionantes, festas animadas e pistas cheias até o fim.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-glow mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 lg:h-[430px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
