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
              alt="Karan Uppal Profile"
              className="w-64 h-64 rounded-full object-cover mb-6 shadow-lg"
            />
            <h1 className="text-4xl font-serif font-bold mb-2">Karan Uppal</h1>
            <p className="text-sm text-muted-foreground">IIT Kharagpur &apos;24</p>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:karan.uppal3@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/karan-uppal3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/karan-uppal3"
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
                I am a Research Fellow at{" "}
                <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Microsoft Research India
                </a>{" "}
                working with{" "}
                <a href="https://www.microsoft.com/en-us/research/people/nagarajn/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Dr. Nagarajan Natarajan
                </a>,{" "}
                <a href="https://www.microsoft.com/en-us/research/people/manik/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Prof. Manik Varma
                </a>, and{" "}
                <a href="https://people.iith.ac.in/vineethnb/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Prof. Vineeth N Balasubramanian
                </a>.
              </p>

              <p className="text-lg leading-relaxed">
                Efficiency in data usage and model design has been the central theme of my research. 
                I am drawn to problems where brute force is not an option—where limited labels, costly data, 
                or compute constraints force us to be creative. I believe progress depends on making models 
                and datasets leaner and more sample-efficient.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-serif font-semibold mb-4">My research focuses on:</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-base leading-relaxed">
                    <strong>Dataset Design as a Learning Mechanism:</strong> How can we structure supervision, 
                    task relationships, and model behavior to maximize learning per example? I view dataset design 
                    as information engineering that can dramatically accelerate learning efficiency.
                  </li>
                  <li className="text-base leading-relaxed">
                    <strong>Efficient Embedding Architectures:</strong> Redesigning how models capture linguistic 
                    and structural composition. My work on vocabulary scaling using Mixture-of-Experts shows that 
                    smarter embedding design can outperform deeper models in text representation tasks.
                  </li>
                  <li className="text-base leading-relaxed">
                    <strong>Task Transfer in Vision-Language Models:</strong> Understanding cross-task interactions 
                    and how fine-tuning on one task influences others, revealing fundamental patterns in model 
                    generalization and transfer behavior.
                  </li>
                </ol>
              </div>

              <p className="text-base leading-relaxed mt-6">
                I completed my Integrated M.Sc. in Mathematics and Computing at{" "}
                <a href="http://www.iitkgp.ac.in/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  IIT Kharagpur
                </a>{" "}
                (CGPA: 9.18/10.0). Previously, I&apos;ve had the privilege of working at{" "}
                <a href="https://is.mpg.de/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Max Planck Institute for Intelligent Systems
                </a>{" "}
                as a DAAD WISE Scholar,{" "}
                <a href="https://vcg.seas.harvard.edu/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Harvard University&apos;s Visual Computing Group
                </a>, and{" "}
                <a href="https://www.nvidia.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  NVIDIA
                </a>.
              </p>

              <div className="mt-8 inline-block border-2 border-destructive rounded px-4 py-2">
                <p className="text-sm font-medium text-destructive uppercase tracking-wide m-0">
                  Open to PhD positions starting Fall 2025/2026!
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
