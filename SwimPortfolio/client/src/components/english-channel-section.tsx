import { Check } from "lucide-react";

export default function EnglishChannelSection() {
  const statistics = [
    {
      value: "13h 13m",
      label: "Total Swim Time",
      subValue: "34km",
      subLabel: "Distance Covered"
    },
    {
      value: "11°C",
      label: "Water Temperature",
      subValue: "3:45 AM",
      subLabel: "Start Time (London)"
    },
    {
      value: "Dover, UK",
      label: "Starting Point",
      subValue: "Cap Gris-Nez, France",
      subLabel: "Finish Point"
    }
  ];

  const challenges = [
    "Frigid 11°C water temperature",
    "Strong cross-currents and tides",
    "Marine traffic navigation",
    "Mental endurance over 13+ hours",
    "Weather condition changes"
  ];

  return (
    <section id="english-channel" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">English Channel Crossing</h2>
          <p className="text-xl text-muted-foreground">The historic swim that made Afrin the first AMU student to conquer the Channel</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg border border-border text-center"
              data-testid={`channel-stat-${index}`}
            >
              <div className={`text-4xl font-bold mb-2 ${index === 0 ? 'text-primary' : index === 1 ? 'text-accent' : 'text-primary'}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground mb-4">{stat.label}</div>
              <div className="text-2xl font-bold text-foreground mb-2">{stat.subValue}</div>
              <div className="text-muted-foreground">{stat.subLabel}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">The Challenge</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The English Channel is considered one of the world's most challenging open-water swims. Afrin faced fierce currents, frigid 11°C waters, and changing weather conditions during her historic crossing.
              </p>
              <p>
                Starting at 3:45 AM London time from Dover's shores, she navigated through the busiest shipping lane in the world, battling not just the physical demands but also marine traffic and unpredictable tides.
              </p>
              <p>
                Her successful completion in 13 hours and 13 minutes places her among an elite group of swimmers worldwide and marks a historic moment for Indian open-water swimming.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Challenges Overcome:</h4>
              <ul className="space-y-2 text-muted-foreground">
                {challenges.map((challenge, index) => (
                  <li 
                    key={index}
                    className="flex items-center"
                    data-testid={`challenge-${index}`}
                  >
                    <Check className="text-primary mr-3 h-4 w-4" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="English Channel map showing swimming route from Dover to France" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="channel-route-map"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-sm font-semibold text-foreground">Route: Dover → Cap Gris-Nez</div>
              <div className="text-xs text-muted-foreground mt-1">34km • Solo Swim • July 29, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
