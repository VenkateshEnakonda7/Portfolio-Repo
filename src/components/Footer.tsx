import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border glass-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-mono font-bold text-lg text-gradient">Venkatesh Enakonda</span>
            </div>
            <p className="text-muted-foreground">
              Automation Test Engineer passionate about building the future of quality assurance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gradient-purple">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-gradient-purple">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Test Automation</p>
              <p className="text-muted-foreground">Framework Development</p>
              <p className="text-muted-foreground">Framework Maintenance</p>
              <p className="text-muted-foreground">CI/CD Integration</p>
              <p className="text-muted-foreground">Quality Consulting</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Built with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>using React & TypeScript</span>
          </div>
          <div className="text-muted-foreground font-mono text-sm">
            v2024.1.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
