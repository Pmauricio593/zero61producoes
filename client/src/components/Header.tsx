import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ClassicButton } from "@/components/classic/ClassicUi";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Casamentos", href: "#casamentos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-400 ${
        scrolled
          ? "border-[#E4D3AC]/15 bg-[rgba(13,20,38,0.97)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-[#E4D3AC]/10 bg-gradient-to-b from-[rgba(13,20,38,0.92)] to-[rgba(13,20,38,0.55)] backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-[86px] items-center justify-between">
        <a href="#inicio" aria-label="Zero61 Produções">
          <Logo variant="light" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="border-b border-transparent pb-1 text-[0.78rem] uppercase tracking-[0.1em] text-[rgba(250,246,239,0.72)] transition hover:border-[#E4D3AC] hover:text-[#E4D3AC]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <ClassicButton href={WHATSAPP_LINK} variant="gold" className="px-6 py-2.5 text-[0.75rem]">
            Solicitar orçamento
          </ClassicButton>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[#FAF6EF] lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[#E4D3AC]/15 bg-[#101A30] lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full border-b border-white/5 px-6 py-4 text-left text-[0.85rem] uppercase tracking-[0.08em] text-[#FAF6EF]"
            >
              {link.label}
            </button>
          ))}
          <div className="p-6">
            <ClassicButton href={WHATSAPP_LINK} variant="gold" className="w-full">
              Solicitar orçamento
            </ClassicButton>
          </div>
        </nav>
      )}
    </header>
  );
}
