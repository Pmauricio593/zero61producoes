import { Award, Heart, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ClassicButton, SectionHead, SectionShell } from "@/components/classic/ClassicUi";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantia de sucesso",
    description:
      "Trabalhamos para que cada detalhe do seu evento saia exatamente como planejado.",
  },
  {
    icon: Heart,
    title: "Satisfação garantida",
    description:
      "Comprometidos em superar expectativas e tornar seu evento inesquecível.",
  },
  {
    icon: Award,
    title: "Profissionalismo em 1º lugar",
    description:
      "Atendimento personalizado, com cada detalhe planejado com antecedência.",
  },
];

export default function WhyChooseSection() {
  return (
    <SectionShell className="bg-[#16233F] text-[#FAF6EF]">
      <SectionHead
        eyebrow="Confiança"
        title="Por que escolher a Zero61"
        onDark
      />

      <div className="mx-auto mb-14 grid max-w-4xl gap-10 md:grid-cols-3">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.title} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#E4D3AC]">
                <Icon className="h-7 w-7 text-[#E4D3AC]" />
              </div>
              <h3 className="mb-2.5 font-serif text-[1.1rem] text-[#FAF6EF]">{reason.title}</h3>
              <p className="text-[0.9rem] leading-relaxed text-[rgba(250,246,239,0.62)]">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>

      <blockquote className="mx-auto max-w-3xl border-t border-[#E4D3AC]/25 pt-12 text-center">
        <p className="font-serif text-[1.3rem] italic leading-relaxed text-[#E4D3AC]">
          "Encaixou certinho tudo o que a gente precisava: cada música no momento certo e o
          pessoal vibrando até agora. A festa vai acabar e eu vou pagar a hora extra com orgulho!"
        </p>
        <footer className="mt-4 text-[0.8rem] uppercase tracking-[0.08em] text-[rgba(250,246,239,0.55)]">
          Daniel e Jéssika — Noivos
        </footer>
      </blockquote>

      <div className="mt-12 text-center">
        <ClassicButton href={WHATSAPP_LINK} variant="outlineDark">
          Fale conosco agora
        </ClassicButton>
      </div>
    </SectionShell>
  );
}
