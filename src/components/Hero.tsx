import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code, Terminal, Zap } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-grid opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-neon-cyan opacity-60 float">
        <Code size={32} />
      </div>
      <div className="absolute top-40 right-20 text-neon-purple opacity-60 float" style={{
      animationDelay: '2s'
    }}>
        <Terminal size={28} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary opacity-60 float" style={{
      animationDelay: '4s'
    }}>
        <Zap size={24} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 pulse-glow">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-mono text-muted-foreground">Available for hire</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Venkatesh</span>
          <br />
          <span className="text-foreground">Enakonda
        </span>
        </h1>

        {/* Role */}
        <div className="text-xl md:text-2xl font-mono text-primary mb-4">
          &lt; Automation Test Engineer /&gt;
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-light text-gradient-purple mb-6">
          Testing the Future, One Script at a Time
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about creating robust, scalable test automation frameworks that ensure 
          quality at every level. Transforming manual testing into intelligent, automated solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="neon" size="lg" className="group">
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="ghost-neon" size="lg" className="group">
            Explore Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Tech Stack Floating */}
        <div className="mt-16 flex justify-center gap-8 text-muted-foreground">
          <div className="glass-card px-4 py-2 hover:scale-105 transition-transform">
            <span className="font-mono text-sm">Selenium</span>
          </div>
          <div className="glass-card px-4 py-2 hover:scale-105 transition-transform">
            <span className="font-mono text-sm">TestNG</span>
          </div>
          <div className="glass-card px-4 py-2 hover:scale-105 transition-transform">
            <span className="font-mono text-sm">Python</span>
          </div>
          <div className="glass-card px-4 py-2 hover:scale-105 transition-transform">
            <span className="font-mono text-sm">Jenkins</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;