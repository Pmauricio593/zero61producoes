import { useRef } from "react";
import { useInView } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { DiamondDivider, Eyebrow, SectionShell } from "@/components/classic/ClassicUi";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl text-[#B8934B]">
        {isInView ? `${target}${suffix}` : `0${suffix}`}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <SectionShell id="sobre">
      <div className="mb-14 text-center">
        <Eyebrow>Quem somos</Eyebrow>
        <DiamondDivider />
        <h2 className="font-serif text-[2.1rem] text-[#16233F]">
          Energia e sofisticação em cada cerimônia
        </h2>
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="photo-frame h-[360px] lg:h-[520px]">
          <img src={IMAGES.about} alt="Zero61 Produções" className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="mb-5 text-[1.02rem] leading-[1.85] text-[#5B564C]">
            A Zero61 Produções é referência em música ao vivo para casamentos em Brasília e Goiás.
            Nossa equipe de músicos experientes conduz cerimônia, coquetel e festa com
            sensibilidade, elegância e um repertório desenhado para a história de cada casal.
          </p>
          <p className="mb-8 text-[1.02rem] leading-[1.85] text-[#5B564C]">
            Também levamos essa mesma qualidade para formaturas, eventos corporativos e
            aniversários, sempre adaptando o tom da apresentação ao estilo de cada celebração.
          </p>

          <div className="grid grid-cols-3 gap-5 border-t border-[#C7D4E3] pt-8">
            <div>
              <Counter target={500} suffix="+" />
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.1em] text-[#5B564C]">
                Eventos realizados
              </p>
            </div>
            <div>
              <Counter target={8} suffix="+" />
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.1em] text-[#5B564C]">
                Anos de experiência
              </p>
            </div>
            <div>
              <Counter target={100} suffix="%" />
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.1em] text-[#5B564C]">
                Satisfação
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
