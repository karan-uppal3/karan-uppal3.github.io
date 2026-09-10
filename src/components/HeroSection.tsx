import { Mail, Github, GraduationCap, Linkedin, FileText } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import resume from "@/assets/resume.pdf"

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
                href="https://scholar.google.com/citations?hl=en&user=xJ-bYh8AAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap className="h-5 w-5" />
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
                href={resume}
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
              <br></br>
              <p className="text-lg leading-relaxed">
                Hello! I am a PhD student at the{" "}
                <a href="https://samueli.ucla.edu/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  University of California, Los Angeles
                </a>.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Previously, I worked as a Research Fellow at{" "}
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
                </a>, on improving representation learning for retrieval models as well as analyzing intertask relations of VLMs.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Prior to joining MSR, I completed an Integrated M.Sc. in Mathematics and Computing at the{" "}
                <a href="http://www.iitkgp.ac.in/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Indian Institute of Technology (IIT) Kharagpur
                </a>. This college offered me ample opportunities that enabled me to intern at reputed institutions such as the
                  Max Planck Institute for Intelligent Systems, NVIDIA, Harvard University, and University of Warwick; win competitions at American Express and IROS;
                  and contribute to startups like Ema and Yantrakaar.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
