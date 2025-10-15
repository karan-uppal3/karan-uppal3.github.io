const publications = [
  {
    title: "Foundational Models Must Be Designed To Yield Safer Loss Landscapes That Resist Harmful Fine-Tuning",
    authors: "Karan Uppal, Pavan Kalyan Tankala",
    venue: "ICML 2025 R2FM Workshop • Under review at NeurIPS 2025",
    links: [
      { text: "Paper", url: "#" },
    ],
  },
  {
    title: "Rethinking Taskonomy in the era of Large Vision Language Models",
    authors: "Abhinav Java*, Bhuvan Sachdeva*, Karan Uppal*, Vineeth N Balasubramanian",
    venue: "Under review at NeurIPS 2025 SpaVLE Workshop",
    links: [
      { text: "Paper", url: "#" },
    ],
  },
  {
    title: "MoVER: Mixture of Vocabulary Experts for Improved Representation Learning",
    authors: "Karan Uppal, Nagarajan Natarajan",
    venue: "Under review at NeurIPS 2025 UniReps Workshop",
    links: [
      { text: "Paper", url: "#" },
    ],
  },
  {
    title: "Decoding Attention from Gaze: A Benchmark Dataset and End-to-End Models",
    authors: "Karan Uppal et al.",
    venue: "NeurIPS 2022 Gaze Meets ML Workshop",
    links: [
      { text: "Paper", url: "#" },
      { text: "Dataset", url: "#" },
    ],
  },
  {
    title: "Multiple Waypoint Navigation in Unknown Indoor Environments",
    authors: "Shivam Sood*, Jaskaran Singh Sodhi*, Parv Maheshwari*, Karan Uppal* et al.",
    venue: "ICCR 2022",
    links: [
      { text: "Paper", url: "#" },
    ],
  },
  {
    title: "[RE] Background-Aware Pooling & Noise-Aware Loss for Weakly-Supervised Semantic Segmentation",
    authors: "Aryan Mehta*, Karan Uppal* et al.",
    venue: "ReScience C Journal 2021 • Journal Showcase at NeurIPS 2022",
    links: [
      { text: "Paper", url: "#" },
      { text: "Code", url: "#" },
    ],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-2">Publications</h2>
          <p className="text-sm text-muted-foreground mb-8">*denotes equal contribution</p>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">{pub.authors}</p>
                <p className="text-sm italic text-muted-foreground">{pub.venue}</p>
                <div className="flex gap-4 text-sm">
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="text-primary hover:underline"
                    >
                      [{link.text}]
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
