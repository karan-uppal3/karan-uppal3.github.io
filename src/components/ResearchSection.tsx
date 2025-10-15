const publications = [
  {
    title: "Understanding Neural Network Generalization Through Solution Structure",
    authors: "Your Name, Collaborator A, Collaborator B",
    venue: "NeurIPS 2024",
    links: [
      { text: "Paper", url: "#" },
      { text: "Code", url: "#" },
    ],
  },
  {
    title: "Communication Complexity in Biological Systems",
    authors: "Your Name, Collaborator C",
    venue: "Nature Communications 2024",
    links: [
      { text: "Paper", url: "#" },
      { text: "Project", url: "#" },
    ],
  },
  {
    title: "Language-Guided Reasoning in Embodied AI Agents",
    authors: "Your Name, Collaborator D, Collaborator E",
    venue: "ICML 2023",
    links: [
      { text: "Paper", url: "#" },
      { text: "Code", url: "#" },
      { text: "Demo", url: "#" },
    ],
  },
  {
    title: "Structural Properties of Artificial Neural Networks",
    authors: "Your Name, Collaborator F",
    venue: "ICLR 2023",
    links: [
      { text: "Paper", url: "#" },
      { text: "Slides", url: "#" },
    ],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8">Selected Publications</h2>
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
