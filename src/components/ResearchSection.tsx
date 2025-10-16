const HoverMedia = ({ thumbnail, hoverMedia, alt }) => {
  const isVideo = hoverMedia.endsWith(".mp4");

  return (
    <div className="w-48 h-32 relative overflow-hidden rounded-lg">
      {/* Static thumbnail */}
      <img
        src={thumbnail}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />

      {/* Hover media */}
      {isVideo ? (
        <video
          src={hoverMedia}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      ) : (
        <img
          src={hoverMedia}
          alt={`${alt} hover`}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      )}
    </div>
  );
};

const publications = [
  {
    title: "Understanding Task Transfer in Vision-Language Models",
    authors: "Bhuvan Sachdeva*, Karan Uppal*, Abhinav Java*, Vineeth N Balasubramanian",
    venue: "Unireps Workshop @ NeurIPS 2025",
    links: [{ text: "Paper", url: "https://openreview.net/forum?id=2DwGffsVTx" }],
    thumbnail: "/images/task-transfer.png",
    hoverMedia: "/images/task-transfer.mp4",
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
    thumbnail: "/images/gaze.png",
    hoverMedia: "/images/gaze.gif",
  },
  {
    title: "[RE] Background-Aware Pooling & Noise-Aware Loss for Weakly-Supervised Semantic Segmentation",
    authors: "Aryan Mehta*, Karan Uppal*, Kaushal Jadhav*, Monish Natarajan*, Mradul Agrawal*, Debashish Chakravarty",
    venue: "ReScience C Journal 2021 • Journal Showcase at NeurIPS 2022",
    links: [
      { text: "Paper", url: "https://zenodo.org/record/6574677/files/article.pdf" },
      { text: "Code", url: "https://github.com/karan-uppal3/BANA" },
    ],
    thumbnail: "/images/bana.png",
    hoverMedia: "/images/bana.gif",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-2">Publications</h2>
          <p className="text-sm text-muted-foreground mb-8">*denotes equal contribution</p>
          <div className="space-y-12">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              >
                {/* Hover media component */}
                <HoverMedia
                  thumbnail={pub.thumbnail}
                  hoverMedia={pub.hoverMedia}
                  alt={pub.title}
                />

                {/* Publication info */}
                <div className="flex-1 space-y-1">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;