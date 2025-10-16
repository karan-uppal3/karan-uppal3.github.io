const publications = [
  {
    title: "Understanding Task Transfer in Vision-Language Models",
    authors: "Bhuvan Sachdeva*, Karan Uppal*, Abhinav Java*, Vineeth N Balasubramanian",
    venue: "Unireps Workshop @ NeurIPS 2025",
    links: [
      { text: "Paper", url: "https://openreview.net/forum?id=2DwGffsVTx" },
    ],
  },
  {
    title: "Decoding Attention from Gaze: A Benchmark Dataset and End-to-End Models",
    authors: "Karan Uppal, Jaeah Kim, Shashank Singh",
    venue: "Gaze Meets ML Workshop @ NeurIPS 2022",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2211.10966" },
      { text: "Dataset", url: "https://osf.io/28rnx/" },
      { text: "Code", url: "https://github.com/karan-uppal3/decoding-attention" },
    ],
  },
  {
    title: "[RE] Background-Aware Pooling & Noise-Aware Loss for Weakly-Supervised Semantic Segmentation",
    authors: "Aryan Mehta*, Karan Uppal*, Kaushal Jadhav*, Monish Natarajan*, Mradul Agrawal*, Debashish Chakravarty",
    venue: "ReScience C Journal 2021 • Journal Showcase at NeurIPS 2022",
    links: [
      { text: "Paper", url: "https://zenodo.org/record/6574677/files/article.pdf" },
      { text: "Code", url: "https://github.com/karan-uppal3/BANA" },
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
