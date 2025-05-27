
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-sky-500/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Stuti Mishra
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Achievements", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-sky-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
