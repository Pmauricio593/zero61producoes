import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";
import { ClassicButton, Eyebrow } from "@/components/classic/ClassicUi";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#16233F] via-[#1E3059] to-[#132038] pt-28"
    >
      <div className="absolute inset-0 opacity-[0.22]">
        <img src={IMAGES.hero} alt="" className="h-full w-full object-cover object-[50%_42%]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,147,75,0.1),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(199,212,227,0.08),transparent_40%)]" />

      <div className="container relative z-10 py-20 text-center">
        <Eyebrow onDark>Brasília • Goiânia • Região</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.1rem,5vw,3.6rem)] leading-tight text-[#FAF6EF]">
          Música ao vivo para o dia mais <span className="accent-italic">especial</span> da sua
          história
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[1.08rem] leading-relaxed text-[rgba(250,246,239,0.78)]">
          Banda especializada em casamentos, com a sensibilidade que a cerimônia pede e a energia
          que a festa merece. Atendemos também formaturas, aniversários e eventos corporativos em
          Brasília e Goiás.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ClassicButton href={WHATSAPP_LINK} variant="gold">
            Orçamento para casamento
          </ClassicButton>
          <ClassicButton
            variant="outlineDark"
            onClick={() =>
              document.querySelector("#eventos")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver todos os eventos
          </ClassicButton>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#E4D3AC]">
        <span>Role</span>
        <span className="h-8 w-px bg-gradient-to-b from-[#E4D3AC] to-transparent" />
      </div>
    </section>
  );
}
