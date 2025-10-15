import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <HeroSection />
      <ResearchSection />
      <NewsSection />
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Academic Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
