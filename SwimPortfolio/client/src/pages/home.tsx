import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import AchievementsTimeline from "@/components/achievements-timeline";
import EnglishChannelSection from "@/components/english-channel-section";
import PhotoGallery from "@/components/photo-gallery";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsTimeline />
      <EnglishChannelSection />
      <PhotoGallery />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
