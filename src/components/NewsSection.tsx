const newsItems = [
  {
    date: "07/2025",
    text: "Invited talk at the",
    link: { text: "ICML Workshop on Machine Learning", url: "#" },
  },
  {
    date: "11/2024",
    text: "Research featured in",
    link: { text: "Nature Magazine", url: "#" },
  },
  {
    date: "11/2024",
    text: "Invited talk at the",
    link: { text: "Conference on Neural Information Processing", url: "#" },
  },
  {
    date: "10/2024",
    text: "Invited talk at",
    link: { text: "Stanford AI Lab", url: "#" },
    location: "in San Francisco",
  },
  {
    date: "09/2024",
    text: "Excited to be part of the cohorts of",
    links: [
      { text: "Rising Stars in EECS", url: "#" },
      { text: "Rising Stars in Data Science", url: "#" },
      { text: "Rising Stars in AI", url: "#" },
    ],
  },
  {
    date: "06/2024",
    text: "Invited talk at Google DeepMind Research Seminar",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8">Recent News</h2>
          <ul className="space-y-4">
            {newsItems.map((item, index) => (
              <li key={index} className="flex gap-4 text-base leading-relaxed">
                <span className="font-semibold text-muted-foreground min-w-[80px]">
                  {item.date}
                </span>
                <div>
                  {item.text}{" "}
                  {item.link && (
                    <a href={item.link.url} className="text-primary hover:underline">
                      {item.link.text}
                    </a>
                  )}
                  {item.links &&
                    item.links.map((link, linkIndex) => (
                      <span key={linkIndex}>
                        {linkIndex > 0 && (linkIndex === item.links!.length - 1 ? ", and " : ", ")}
                        <a href={link.url} className="text-primary hover:underline">
                          {link.text}
                        </a>
                      </span>
                    ))}
                  {item.location && ` ${item.location}`}.
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
