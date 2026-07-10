import { Music, Zap, Speaker, Star } from "lucide-react";
import { SectionHead, SectionShell } from "@/components/classic/ClassicUi";

const differentials = [
  {
    icon: Music,
    title: "Repertório versátil",
    description:
      "Sertanejo, pop, forró, axé, pagode, internacional e grandes clássicos conhecidos, sempre no tom certo para cada celebração.",
  },
  {
    icon: Zap,
    title: "Performances com energia",
    description:
      "Músicos e vocalistas que envolvem o público com presença de palco e sensibilidade.",
  },
  {
    icon: Speaker,
    title: "Equipamento de ponta",
    description:
      "Áudio e iluminação profissionais para uma experiência impecável, discreta quando o momento pede.",
  },
  {
    icon: Star,
    title: "Experiência comprovada",
    description:
      "São mais de 500 eventos realizados em Brasília e Goiás. Sabemos criar o clima ideal para cada ocasião.",
  },
];

export default function DifferentialsSection() {
  return (
    <SectionShell id="diferenciais">
      <SectionHead eyebrow="Diferenciais" title="O que nos torna únicos" />

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {differentials.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="classic-card flex gap-5 p-8">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#E4D3AC] bg-[#F3ECE0]">
                <Icon className="h-6 w-6 text-[#B8934B]" />
              </div>
              <div>
                <h3 className="mb-2 font-serif text-[1.1rem] text-[#16233F]">{item.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-[#5B564C]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
