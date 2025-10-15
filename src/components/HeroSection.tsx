import { Mail, Github, Linkedin, FileText } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start max-w-6xl mx-auto">
          {/* Profile Sidebar */}
          <div className="flex flex-col items-center text-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover mb-6 shadow-lg"
            />
            <h1 className="text-4xl font-serif font-bold mb-2">Your Name</h1>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:your.email@university.edu"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="CV"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                I am an incoming Assistant Professor at{" "}
                <a href="#" className="text-primary hover:underline">
                  Your University
                </a>{" "}
                in{" "}
                <a href="#" className="text-primary hover:underline">
                  Computer Science
                </a>{" "}
                and a Research Scientist at{" "}
                <a href="#" className="text-primary hover:underline">
                  Research Institution
                </a>
                .
              </p>

              <p className="text-lg leading-relaxed">
                I enjoy thinking about the interplay between language, reasoning, and artificial
                intelligence. My research goal is to understand systems that exhibit intelligent
                behaviors and build better AI systems.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-serif font-semibold mb-4">Recently, I have worked on:</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-base leading-relaxed">
                    Developing algorithms to understand neural network architectures and their
                    generalization properties [
                    <a href="#" className="text-primary hover:underline">
                      I
                    </a>
                    ,{" "}
                    <a href="#" className="text-primary hover:underline">
                      II
                    </a>
                    ],
                  </li>
                  <li className="text-base leading-relaxed">
                    Understanding the complexity and structure of communication systems in artificial
                    and biological systems [
                    <a href="#" className="text-primary hover:underline">
                      III
                    </a>
                    ,{" "}
                    <a href="#" className="text-primary hover:underline">
                      IV
                    </a>
                    ],
                  </li>
                  <li className="text-base leading-relaxed">
                    How language can support effective reasoning and planning in AI agents and robots
                    [
                    <a href="#" className="text-primary hover:underline">
                      V
                    </a>
                    ,{" "}
                    <a href="#" className="text-primary hover:underline">
                      VI
                    </a>
                    ,{" "}
                    <a href="#" className="text-primary hover:underline">
                      VII
                    </a>
                    ].
                  </li>
                </ol>
              </div>

              <p className="text-base leading-relaxed mt-6">
                I did my PhD in EECS at MIT advised by{" "}
                <a href="#" className="text-primary hover:underline">
                  Prof. Advisor Name
                </a>
                . Before that, I was at Carnegie Mellon University's Robotics Institute for a
                research internship. Even before that, I was an undergraduate student at{" "}
                <a href="#" className="text-primary hover:underline">
                  Your Alma Mater
                </a>
                .
              </p>

              <div className="mt-8 inline-block border-2 border-destructive rounded px-4 py-2">
                <p className="text-sm font-medium text-destructive uppercase tracking-wide m-0">
                  I am recruiting PhD students for a start in Fall 2026!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
