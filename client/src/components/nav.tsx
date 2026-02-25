import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Stack", href: "#stack", id: "stack" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-4xl mx-auto glass-nav rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-2 max-w-3xl' : ''}`}
      >
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-display font-extrabold text-lg shadow-lg shadow-primary/25 ring-2 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-105 transition-all duration-300">
              MKS
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary-foreground ring-2 ring-background" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-lg text-foreground group-hover:text-primary transition-colors">MKS</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">Mukesh Kumar Sihag</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <div className="w-[1px] h-4 bg-border" />
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/mukeshsihag" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <button 
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-4 py-1.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="p-2 cursor-pointer" aria-label="Menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="md:hidden max-w-xs mx-auto mt-4 glass-nav rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4 text-center">
              {links.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="text-lg font-medium py-2 border-b border-border/50 last:border-0 text-foreground cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="text-lg font-medium py-2 text-foreground cursor-pointer"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
