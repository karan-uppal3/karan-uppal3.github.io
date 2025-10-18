import React from "react";

const HoverMedia = ({ thumbnail, hoverMedia, alt }) => {
  const isVideo = hoverMedia.endsWith(".mp4");

  return (
    <div className="w-48 aspect-square relative overflow-hidden rounded-lg">
      {/* Static thumbnail */}
      <img
        src={thumbnail}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Hover media */}
      {isVideo ? (
        <video
          src={hoverMedia}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : (
        <img
          src={hoverMedia}
          alt={`${alt} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </div>
  );
};

import taskTransferImg from "@/assets/task_transfer.png";
import taskTransferVid from "@/assets/task_transfer.png";
import gazeImg from "@/assets/MPI_img.gif";
import gazeVid from "@/assets/MPI_vid.mp4";
import banaImg from "@/assets/BANA_1.jpg";
import banaVid from "@/assets/BANA_2.png";
import msrpic from "@/assets/Microsoft_logo.svg.png"
import mpipic from "@/assets/mpi.png"
import harvardpic from "@/assets/harvard.png"

const publications = [
  {
    title: "Understanding Task Transfer in Vision-Language Models",
    authors:
      "Bhuvan Sachdeva*, Karan Uppal*, Abhinav Java*, Vineeth N Balasubramanian",
    venue: "Unireps Workshop @ NeurIPS 2025",
    description: "Analyzing how finetuning on one perception task affects performance in other tasks in VLMs",
    links: [{ text: "Paper", url: "https://openreview.net/forum?id=2DwGffsVTx" }],
    thumbnail: taskTransferImg,
    hoverMedia: taskTransferVid,
  },
  {
    title:
      "Decoding Attention from Gaze: A Benchmark Dataset and End-to-End Models",
    authors: "Karan Uppal, Jaeah Kim, Shashank Singh",
    venue: "Gaze Meets ML Workshop @ NeurIPS 2022",
    description: "Created a dataset and baseline models for the task of human attention decoding from gaze",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2211.10966" },
      { text: "Dataset", url: "https://osf.io/28rnx/" },
      { text: "Code", url: "https://github.com/karan-uppal3/decoding-attention" },
    ],
    thumbnail: gazeImg,
    hoverMedia: gazeVid,
  },
  {
    title:
      "[RE] Background-Aware Pooling & Noise-Aware Loss for Weakly-Supervised Semantic Segmentation",
    authors:
      "Aryan Mehta*, Karan Uppal*, Kaushal Jadhav*, Monish Natarajan*, Mradul Agrawal*, Debashish Chakravarty",
    venue: "ReScience C Journal 2021 • Journal Showcase at NeurIPS 2022",
    description: "Reviewed a CVPR 2021 publication for reproducibility and extended the approach to instance segmentation",
    links: [
      { text: "Paper", url: "https://zenodo.org/record/6574677/files/article.pdf" },
      { text: "Code", url: "https://github.com/karan-uppal3/BANA" },
    ],
    thumbnail: banaImg,
    hoverMedia: banaVid,
  },
];

const researchExperience = [
  {
    title: "Microsoft Research India",
    authors: "Guide: Dr. Nagarajan Natarajan, Prof. Vineeth N Balasubramanian, Prof. Manik Varma",
    venue: "Research Fellow | Jul 2024 - Present",
    description:
      "Working on efficient representation learning and meta-analysis of VLMs.",
    thumbnail: msrpic,
    hoverMedia: msrpic,  // can be image or video
  },
  {
    title: "Max Planck Institute for Intelligent Systems",
    authors: "Guide: Dr. Shashank Singh, Prof. Bernhard Schölkopf",
    venue: "DAAD WISE Scholar | May 2022 - Jul 2022",
    description:
      "Released a new dataset and baseline models to decode human attention from gaze data",
    thumbnail: mpipic,
    hoverMedia: mpipic,
  },
  {
    title: "Harvard University",
    authors: "Guide: Dr. Shashank Singh, Prof. Bernhard Schölkopf",
    venue: "Research Intern | May 2021 - Aug 2021",
    description:
      "Achieved 1st position on the CREMI leaderboard for synaptic cleft detection task using semi-supervised learning",
    thumbnail: harvardpic,
    hoverMedia: harvardpic,
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
                className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-transform hover:scale-[1.01]"
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
          
          <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold mb-2">Research Experience</h2>
          <div className="space-y-12">
            {researchExperience.map((exp, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-transform hover:scale-[1.01]"
              >
                <HoverMedia
                  thumbnail={exp.thumbnail}
                  hoverMedia={exp.hoverMedia}
                  alt={exp.title}
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.authors}</p>
                  <p className="text-sm italic text-muted-foreground">{exp.venue}</p>
                  {exp.description && (
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;