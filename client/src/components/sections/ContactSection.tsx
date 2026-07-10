import { useState } from "react";
import { Instagram, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  INSTAGRAM_FERNANDO,
  INSTAGRAM_ZERO61,
} from "@/lib/constants";
import { ClassicButton, SectionHead, SectionShell } from "@/components/classic/ClassicUi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoEvento: "",
    dataEvento: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.nome}.%0A%0ATipo de evento: ${formData.tipoEvento}%0AData do evento: ${formData.dataEvento}%0AEmail: ${formData.email}%0AWhatsApp: ${formData.whatsapp}%0A%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionShell id="contato">
      <SectionHead
        eyebrow="Contato"
        title="Reserve a Zero61 para o seu evento"
        lead="Preencha o formulário com os detalhes do seu casamento ou evento, ou fale diretamente pelo WhatsApp."
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={handleSubmit} className="classic-card p-8 md:p-10">
          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-[#5B564C]">
                Nome *
              </label>
              <input
                className="classic-input"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-[#5B564C]">
                Email *
              </label>
              <input
                className="classic-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-[#5B564C]">
                WhatsApp *
              </label>
              <input
                className="classic-input"
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="(61) 99999 9999"
              />
            </div>
            <div>
              <label className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-[#5B564C]">
                Tipo de evento *
              </label>
              <select
                className="classic-input"
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="Casamento">Casamento</option>
                <option value="Formatura">Formatura</option>
                <option value="Evento Corporativo">Evento Corporativo</option>
                <option value="Aniversário">Aniversário</option>
                <option value="Debutante">Debutante</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-[#5B564C]">
              Data do evento
            </label>
            <input
              className="classic-input"
              type="text"
              name="dataEvento"
              value={formData.dataEvento}
              onChange={handleChange}
              placeholder="dd/mm/aaaa"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-[#5B564C]">
              Mensagem
            </label>
            <textarea
              className="classic-input min-h-[100px] resize-y"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Conte-nos sobre o seu casamento ou evento: local, número de convidados..."
            />
          </div>

          <ClassicButton type="submit" variant="primary" className="w-full">
            <Send className="h-4 w-4" />
            Enviar via WhatsApp
          </ClassicButton>
        </form>

        <div className="flex flex-col gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="classic-card flex items-center gap-4 p-5 transition hover:border-[#B8934B]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3ECE0]">
              <Phone className="h-5 w-5 text-[#B8934B]" />
            </div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.08em] text-[#5B564C]">WhatsApp</div>
              <div className="text-[0.95rem] text-[#16233F]">{WHATSAPP_DISPLAY}</div>
            </div>
          </a>

          <a href={INSTAGRAM_ZERO61} target="_blank" rel="noopener noreferrer" className="classic-card flex items-center gap-4 p-5 transition hover:border-[#B8934B]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3ECE0]">
              <Instagram className="h-5 w-5 text-[#B8934B]" />
            </div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.08em] text-[#5B564C]">Instagram</div>
              <div className="text-[0.95rem] text-[#16233F]">@zero61producoes</div>
            </div>
          </a>

          <a href={INSTAGRAM_FERNANDO} target="_blank" rel="noopener noreferrer" className="classic-card flex items-center gap-4 p-5 transition hover:border-[#B8934B]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3ECE0]">
              <Instagram className="h-5 w-5 text-[#B8934B]" />
            </div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.08em] text-[#5B564C]">Instagram</div>
              <div className="text-[0.95rem] text-[#16233F]">@fernandobocaooficial</div>
            </div>
          </a>

          <div className="classic-card flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3ECE0]">
              <MapPin className="h-5 w-5 text-[#B8934B]" />
            </div>
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.08em] text-[#5B564C]">
                Região de atuação
              </div>
              <div className="text-[0.95rem] text-[#16233F]">Brasília (DF), Goiânia (GO)</div>
              <div className="text-[0.85rem] text-[#5B564C]">e toda região Centro-Oeste</div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
