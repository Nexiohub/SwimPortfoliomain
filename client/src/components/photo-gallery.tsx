import afreenPhoto from "@assets/FB_Profile_1768587195592.jpg";
import afreenMedalPhoto from "@assets/IMG_1309_1768587124213.jpg";
import afreenSwimmingPhoto from "@assets/IMG_1300_1768587124187.jpg";
import afreenVictoryPhoto from "@assets/IMG_1308_1768587124213.jpg";

export default function PhotoGallery() {
  const galleryImages = [
    {
      src: afreenMedalPhoto,
      alt: "Afrin Jabee proudly displaying her swimming medal",
      title: "Medal Victory",
      subtitle: "Competition Success"
    },
    {
      src: afreenSwimmingPhoto,
      alt: "Afrin Jabee swimming backstroke during training",
      title: "Training Session",
      subtitle: "Backstroke Technique"
    },
    {
      src: afreenVictoryPhoto,
      alt: "Afrin Jabee with multiple medals at competition podium",
      title: "Multiple Victories",
      subtitle: "Championship Success"
    },
    {
      src: afreenPhoto,
      alt: "Afrin Jabee in competition gear",
      title: "Competition Ready",
      subtitle: "English Channel Preparation"
    },
    {
      src: afreenMedalPhoto,
      alt: "Afrin Jabee celebrating swimming achievement",
      title: "Achievement Celebration",
      subtitle: "Victory Recognition"
    },
    {
      src: afreenSwimmingPhoto,
      alt: "Afrin Jabee swimming technique demonstration",
      title: "Swimming Excellence",
      subtitle: "Technical Mastery"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Photo Gallery</h2>
          <p className="text-xl text-muted-foreground">Capturing moments of triumph and dedication</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="font-semibold" data-testid={`gallery-title-${index}`}>{image.title}</div>
                <div className="text-sm" data-testid={`gallery-subtitle-${index}`}>{image.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
