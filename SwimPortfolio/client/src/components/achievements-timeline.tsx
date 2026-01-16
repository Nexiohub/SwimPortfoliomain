export default function AchievementsTimeline() {
  const achievements = [
    {
      date: "July 29, 2025",
      title: "English Channel Crossing",
      description: "First AMU student to successfully swim the English Channel solo. Completed 34km crossing in 13h 13m through challenging 11°C waters from Dover to Cap Gris-Nez.",
      tags: ["Historic Achievement", "Solo Swim"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      imageAlt: "English Channel swimming route map",
      position: "left"
    },
    {
      date: "2021-2024",
      title: "All-India Inter-University Championships",
      description: "Represented Vidyasagar University three times at the prestigious All-India Inter-University Aquatic Championships, establishing herself as a formidable competitor in open-water swimming.",
      tags: ["3x Participant"],
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      imageAlt: "University swimming championship competition",
      position: "right"
    },
    {
      date: "2022-2023",
      title: "West Bengal State Representation",
      description: "Competed twice for West Bengal at national level competitions, showcasing her talent and earning recognition as one of the state's top swimming prospects.",
      tags: ["State Level"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      imageAlt: "State level swimming competition in West Bengal",
      position: "left"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Career Achievements</h2>
          <p className="text-xl text-muted-foreground">A timeline of excellence in competitive swimming</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`relative flex flex-col ${achievement.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                data-testid={`achievement-${index}`}
              >
                <div className={`md:w-1/2 ${achievement.position === 'right' ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
                    <div className="text-primary font-semibold mb-2" data-testid={`achievement-date-${index}`}>
                      {achievement.date}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`achievement-title-${index}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`achievement-description-${index}`}>
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            index === 0 
                              ? 'bg-primary/10 text-primary' 
                              : index === 1 
                              ? 'bg-secondary/20 text-secondary-foreground'
                              : 'bg-chart-2/20 text-foreground'
                          }`}
                          data-testid={`achievement-tag-${index}-${tagIndex}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                  index === 0 ? 'bg-primary' : index === 1 ? 'bg-accent' : 'bg-chart-2'
                }`}></div>
                
                <div className={`md:w-1/2 ${achievement.position === 'right' ? 'md:pr-12' : 'md:pl-12'} mt-6 md:mt-0`}>
                  <img 
                    src={achievement.image}
                    alt={achievement.imageAlt}
                    className="rounded-lg shadow-lg w-full"
                    data-testid={`achievement-image-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
