const newsItems = [
  {
    date: "Sep 2026",
    text: "Started my PhD in Computer Science at UCLA",
  },
  {
    date: "Apr 2026",
    text: "Going to CVPR 2026 for an oral presentation, do connect if you'll be there!",
  },
  {
    date: "Feb 2026",
    text: "Paper on",
    link: { text: "understanding task relations in VLMs", url: "https://aka.ms/task-transfer-vlms" },
    location: "accepted at CVPR 2026",
  },
  {
    date: "Dec 2025",
    text: "Attending",
    link: { text: "NeurIPS 2025", url: "https://neurips.cc/" },
    location: "in San Diego, hope to see you there!",
  }
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
                    <a href={item.link.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      {item.link.text}
                    </a>
                  )}
                  {item.location && ` ${item.location}`}
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
