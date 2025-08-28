import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse delay-1000" />
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 animate-slide-up px-4">
        <h1 className="text-6xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-cyber-flicker">
            Manikandan
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-muted-foreground">
          Java Full Stack Developer
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground leading-relaxed">
          Crafting scalable web applications with modern technologies. 
          Passionate about clean code, innovative solutions, and pushing the boundaries of what's possible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="neon-glow cyber-border">
            <Link to="/projects">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Link>
          </Button>
          
          <Button asChild variant="secondary" size="lg" className="cyber-border">
            <Link to="/resume">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;