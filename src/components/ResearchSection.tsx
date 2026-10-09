import React from "react";

import taskTransferImg from "@/assets/task_transfer.png";
import swiftImg from "@/assets/swift.png";
import moveImg from "@/assets/move.png";


const publications = [
  {
    title: "MoVE: Mixture-of-Vocabulary-Experts for Improved Representation Learning",
    authors: [
      { name: "Karan Uppal", highlight: true },
      { name: "Nagarajan Natarajan", highlight: false },
      { name: "Manik Varma", highlight: false },
    ],
    venue: [
      { text: "Under review ", highlight: false },
    ],
    description: "Enabling large vocabularies in encoder-only models, boosting performance and reducing latency",
    links: [],
    thumbnail: moveImg,
    hoverMedia: moveImg,
  },
  {
    title: "Understanding Task Transfer in Vision-Language Models",
    authors: [
      { name: "Bhuvan Sachdeva*", highlight: false },
      { name: "Karan Uppal*", highlight: true },
      { name: "Abhinav Java*", highlight: false },
      { name: "Vineeth N Balasubramanian", highlight: false },
    ],
    venue: [
      { text: "CVPR 2026 ", highlight: false },
      { text: "(Oral)", highlight: true },
      { text: " | Unireps Workshop @ NeurIPS 2025", highlight: false },
    ],
    description: "Analyzing how finetuning on one perception task affects performance in other tasks in VLMs",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2511.18787" },
      { text: "Project Page", url: "https://aka.ms/task-transfer-vlms" },
      { text: "Talk@CVPR", url: "https://youtu.be/5NVe9TJLcFQ"}
    ],
    thumbnail: taskTransferImg,
    hoverMedia: taskTransferImg,
  },
  {
    title: "Swift Sampling: Selecting Temporal Surprises via Taylor Series",
    authors: [
      { name: "Dahye Kim", highlight: false },
      { name: "Bhuvan Sachdeva*", highlight: false },
      { name: "Karan Uppal*", highlight: true },
      { name: "Naman Gupta*", highlight: false },
      { name: "Vineeth N. Balasubramanian", highlight: false },
      { name: "Deepti Ghadiyaram", highlight: false },
    ],
    venue: [
      { text: "NeurIPS 2026 ", highlight: false },
    ],
    description: "Training-free frame selection algorithm that automatically identifies high-information moments in a video",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2605.22678" },
      { text: "Project Page", url: "https://kim-dahye.github.io/swift-sampling/" },
      { text: "Code", url: "https://github.com/kim-dahye/SwiftSampling"}
    ],
    thumbnail: swiftImg,
    hoverMedia: swiftImg,
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">


          <h2 className="text-3xl font-serif font-bold mb-2">Selected Publications</h2>
          <p className="text-sm text-muted-foreground mb-8">*denotes equal contribution</p>
          <div className="space-y-12">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              >
                <HoverMedia
                  thumbnail={pub.thumbnail}
                  alt={pub.title}
                />

                <div className="flex-1 space-y-1">
                  {/* Keep your existing publication information here */}
                </div>
              </div>
                {/* Publication info */}
                <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {pub.authors.map((author, i) => (
                    <span
                      key={i}
                      className={author.highlight ? "font-semibold text-foreground" : ""}
                    >
                      {author.name}
                      {i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  {pub.venue.map((part, i) => (
                    <span
                      key={i}
                      className={part.highlight ? "text-red-600 font-semibold" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </p>
                {pub.description && (
                  <p className="text-sm text-muted-foreground">{pub.description}</p>
                )}
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