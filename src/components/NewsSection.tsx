const newsItems = [
  {
    date: "Jul 2024",
    text: "Started as Research Fellow at",
    link: { text: "Microsoft Research India", url: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" },
    location: "working on VLMs and embedding architectures",
  },
  {
    date: "May 2024",
    text: "Graduated from",
    link: { text: "IIT Kharagpur", url: "http://www.iitkgp.ac.in/" },
    location: "with Integrated M.Sc. in Mathematics and Computing (CGPA: 9.18/10.0)",
  },
  {
    date: "Apr 2024",
    text: "Completed AI Residency at",
    link: { text: "Ema (YC S23)", url: "#" },
    location: "focusing on agentic AI and LLM-powered enterprise solutions",
  },
  {
    date: "Aug 2023",
    text: "Concluded fellowship at",
    link: { text: "University of Warwick and UN-REDD", url: "#" },
    location: "as Data Science for Social Good Fellow",
  },
  {
    date: "Jul 2022",
    text: "Completed DAAD WISE Scholarship at",
    link: { text: "Max Planck Institute for Intelligent Systems", url: "https://is.mpg.de/" },
    location: "in Tübingen, Germany",
  },
  {
    date: "Aug 2021",
    text: "Research internship at",
    link: { text: "Harvard University", url: "https://vcg.seas.harvard.edu/" },
    location: "achieving 1st place on CREMI leaderboard",
  },
  {
    date: "Nov 2022",
    text: "2nd place in",
    link: { text: "American Express Campus Super Bowl", url: "#" },
    location: "among 3600+ teams",
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
                    <a href={item.link.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      {item.link.text}
                    </a>
                  )}
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
