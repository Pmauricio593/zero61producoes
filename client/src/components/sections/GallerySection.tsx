import { IMAGES } from "@/lib/constants";
import { SectionHead, SectionShell } from "@/components/classic/ClassicUi";

const galleryImages = [
  { src: IMAGES.gallery1, alt: "Galeria Zero61 1" },
  { src: IMAGES.gallery2, alt: "Galeria Zero61 2" },
  { src: IMAGES.gallery3, alt: "Galeria Zero61 3" },
  { src: IMAGES.gallery4, alt: "Galeria Zero61 4" },
];

export default function GallerySection() {
  return (
    <SectionShell id="galeria">
      <SectionHead
        eyebrow="Registros"
        title="Momentos que já embalamos"
        lead="Um pouco do que acontece quando a Zero61 sobe ao palco: cerimônias emocionantes, festas animadas e pistas cheias até o fim."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <div key={image.src} className="photo-frame h-[360px] lg:h-[430px]">
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
