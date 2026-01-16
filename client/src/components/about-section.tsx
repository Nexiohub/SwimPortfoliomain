import { ArrowRight } from "lucide-react";

const afreenVictoryPhoto = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80";

export default function AboutSection() {
  const scrollToAchievements = () => {
    const element = document.querySelector('#achievements');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About Afrin</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Afrin Jabee made history on July 29, 2025, becoming the <strong className="text-foreground">first student from Aligarh Muslim University (AMU)</strong> to successfully swim across the English Channel. Her remarkable achievement of completing the 34-kilometer solo crossing in 13 hours and 13 minutes through 11°C frigid waters has inspired countless swimmers across India.
              </p>
              <p>
                Originally from Paschim Medinipur, West Bengal, Afrin is pursuing her B.P.Ed. at AMU while establishing herself as one of India's most promising open-water swimmers. Her journey from representing Vidyasagar University to conquering one of the world's most challenging swimming feats showcases her unwavering determination and athletic excellence.
              </p>
              <p>
                Beyond her athletic achievements, Afrin's success brings pride to AMU, West Bengal, and India, demonstrating that perseverance and dedication can overcome any challenge. As she puts it: <em>"I am happy to have brought joy to my nation, University and family, who always support me in pursuing my dreams."</em>
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={scrollToAchievements}
                className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
                data-testid="view-achievements"
              >
                View All Achievements <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={afreenVictoryPhoto} 
              alt="Afrin Jabee sitting proudly with her swimming medals at competition venue" 
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold" data-testid="channel-time">13h 13m</div>
              <div className="text-sm opacity-90">English Channel Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
