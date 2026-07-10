import Logo from "@/components/Logo";
import {
  INSTAGRAM_FERNANDO,
  INSTAGRAM_ZERO61,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C7D4E3] bg-[#F3ECE0] py-14">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#inicio" aria-label="Zero61 Produções" className="mb-4 inline-block">
              <Logo variant="dark" />
            </a>
            <p className="max-w-sm text-[0.88rem] leading-relaxed text-[#5B564C]">
              Banda profissional especializada em casamentos, com atuação também em formaturas,
              eventos corporativos e festas em Brasília (DF) e Goiás.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[0.72rem] uppercase tracking-[0.12em] text-[#5B564C]">
              Links rápidos
            </h4>
            <nav className="flex flex-col text-[0.88rem] leading-8 text-[#5B564C]">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Casamentos", href: "#casamentos" },
                { label: "Eventos", href: "#eventos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="transition hover:text-[#16233F]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-[0.72rem] uppercase tracking-[0.12em] text-[#5B564C]">
              Contato
            </h4>
            <div className="flex flex-col text-[0.88rem] leading-8 text-[#5B564C]">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#16233F]">
                {WHATSAPP_DISPLAY}
              </a>
              <a href={INSTAGRAM_ZERO61} target="_blank" rel="noopener noreferrer" className="hover:text-[#16233F]">
                @zero61producoes
              </a>
              <a href={INSTAGRAM_FERNANDO} target="_blank" rel="noopener noreferrer" className="hover:text-[#16233F]">
                @fernandobocaooficial
              </a>
              <span>Brasília (DF) e Goiás</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#C7D4E3] pt-6 text-[0.78rem] text-[#5B564C]">
          <p>&copy; {currentYear} Zero61 Produções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
