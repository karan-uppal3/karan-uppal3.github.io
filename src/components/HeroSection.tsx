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
                href="@/assets/Resume.pdf"
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
                <a href="https://people.iith.ac.in/vineethnb/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Prof. Vineeth N Balasubramanian
                </a>, and{" "}
                <a href="https://www.microsoft.com/en-us/research/people/manik/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Prof. Manik Varma
                </a>, where I work on improving representation learning for retrieval models as well as analyze the inter-task relations of VLMs.
              </p>

              <p className="text-lg leading-relaxed">
                Efficiency in data usage and model design has been the central theme of my research. 
                I am drawn to problems where brute force is not an option—where limited labels, costly data, 
                or compute constraints force us to be creative. I believe progress depends on making models 
                and datasets more sample-efficient. As model sizes and data demands escalate, progress 
                increasingly depends not only on scaling but on extracting maximal learning from minimal examples.
              </p>

              <p className="text-lg leading-relaxed">
                I completed my Integrated M.Sc. in Mathematics and Computing at{" "}
                <a href="http://www.iitkgp.ac.in/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  IIT Kharagpur
                </a>. This college offered me ample opportunities that enabled me to intern at reputed institutions such as the
                  Max Planck Institute for Intelligent Systems, Harvard University, NVIDIA and University of Warwick.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
