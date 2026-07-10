import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WeddingsSection from "@/components/sections/WeddingsSection";
import OtherEventsSection from "@/components/sections/OtherEventsSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WeddingsSection />
        <OtherEventsSection />
        <DifferentialsSection />
        <WhyChooseSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
