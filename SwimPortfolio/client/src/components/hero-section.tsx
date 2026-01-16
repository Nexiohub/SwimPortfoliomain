import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import afreenMedalPhoto from "@assets/IMG_1309_1758198097030.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient wave-pattern min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 text-[#74767e] bg-[#000000a3]"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Welcome to<br />
          <span className="text-accent">Afrin Jabee's</span><br />
          Page
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          First AMU student to conquer the English Channel • Open Water Swimming Champion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('#about')}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            data-testid="hero-learn-more"
          >
            Learn More
          </Button>
          <Button
            onClick={() => scrollToSection('#english-channel')}
            variant="outline"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            data-testid="hero-channel-story"
          >
            English Channel Story
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Hero Image */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-64 md:h-full">
        <img 
          src={afreenMedalPhoto} 
          alt="Afrin Jabee proudly displaying her swimming medal after competition victory" 
          className="w-full h-full object-cover object-center opacity-80 mix-blend-overlay"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}
