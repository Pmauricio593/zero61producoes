import { IMAGES } from "@/lib/constants";
import {
  DiamondDivider,
  Eyebrow,
  SectionHead,
  SectionShell,
} from "@/components/classic/ClassicUi";

const events = [
  {
    title: "Formaturas",
    description:
      "Trilha sonora para colação de grau e baile, do protocolo à celebração.",
    image: IMAGES.formatura,
  },
  {
    title: "Corporativo",
    description:
      "Profissionalismo e sofisticação para confraternizações e lançamentos.",
    image: IMAGES.corporativo,
  },
  {
    title: "Aniversários",
    description: "Celebrações animadas com música ao vivo de verdade.",
    image: IMAGES.aniversario,
  },
  {
    title: "Debutantes & Réveillon",
    description:
      "Também presentes em festas de 15 anos, confraternizações e réveillon.",
    image: IMAGES.debutante,
  },
];

export default function OtherEventsSection() {
  return (
    <SectionShell id="eventos">
      <SectionHead eyebrow="Também atendemos" title="Todos os tipos de eventos" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <article
            key={event.title}
            className="classic-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(22,35,63,0.1)]"
          >
            <div className="photo-frame h-[180px] rounded-none border-0">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
            </div>
            <div className="px-5 py-6">
              <h3 className="mb-2.5 font-serif text-[1.15rem] text-[#16233F]">{event.title}</h3>
              <p className="text-[0.9rem] leading-relaxed text-[#5B564C]">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
