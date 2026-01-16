export default function NewsSection() {
  const newsArticles = [
    {
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      alt: "News coverage of English Channel crossing",
      title: "AMU Student Afrin Jabee Conquers the English Channel",
      excerpt: "Historic achievement as first AMU student successfully completes solo English Channel crossing in challenging conditions..."
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      alt: "AMU celebrates achievement",
      title: "Making Waves: AMU's Afrin Jabee Creates History",
      excerpt: "University celebrates as student from West Bengal brings pride through unprecedented swimming achievement..."
    },
    {
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
      alt: "Swimming achievement recognition",
      title: "From Medinipur to English Channel: Afrin's Journey",
      excerpt: "The inspiring story of how a student from West Bengal conquered one of swimming's greatest challenges..."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest News</h2>
          <p className="text-xl text-muted-foreground">Media coverage of Afrin's historic achievement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article 
              key={index}
              className="bg-card rounded-xl shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              data-testid={`news-article-${index}`}
            >
              <img 
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <span className="text-sm text-primary font-semibold">Press</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.excerpt}
                </p>
                <button className="text-primary hover:text-accent transition-colors font-semibold text-sm">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
