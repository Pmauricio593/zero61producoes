import { Check } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";
import {
  ClassicButton,
  DiamondDivider,
  Eyebrow,
  SectionShell,
} from "@/components/classic/ClassicUi";

const features = [
  "Repertório personalizado para entrada, cerimônia e valsa",
  "Transição suave entre cerimônia, coquetel e pista",
  "Alinhamento com cerimonialista e demais fornecedores",
  "Som e iluminação discretos, sem competir com a decoração",
];

export default function WeddingsSection() {
  return (
    <SectionShell id="casamentos" className="bg-[#F3ECE0]">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Nossa maior especialidade</Eyebrow>
          <DiamondDivider />
          <h2 className="font-serif text-[2.1rem] text-[#16233F]">Especialistas em casamentos</h2>
          <p className="mt-5 text-[1.02rem] leading-[1.85] text-[#5B564C]">
            Do cerimonial à pista de dança, cuidamos da trilha sonora do seu casamento com
            repertório sob medida para cada etapa, sempre em sintonia com o cerimonial e os
            fornecedores do dia.
          </p>

          <ul className="my-7 flex flex-col gap-3.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[0.98rem] text-[#262420]">
                <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#B8934B]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-[1.02rem] leading-[1.85] text-[#5B564C]">
            O repertório passeia por sertanejo, pop, forró, axé, pagode, hits internacionais e
            grandes clássicos que todo mundo conhece e canta junto.
          </p>

          <ClassicButton href={WHATSAPP_LINK} variant="primary">
            Falar sobre meu casamento
          </ClassicButton>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="photo-frame col-span-2 h-[280px]">
            <img
              src={IMAGES.weddingMain}
              alt="Casamento com a Zero61"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="photo-frame h-[180px]">
            <img src={IMAGES.wedding1} alt="Cerimônia" className="h-full w-full object-cover" />
          </div>
          <div className="photo-frame h-[180px]">
            <img src={IMAGES.wedding2} alt="Festa" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
