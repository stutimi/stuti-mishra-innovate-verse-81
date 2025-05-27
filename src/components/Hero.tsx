
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-sky-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-xl animate-bounce"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 animate-pulse hover:scale-105 transition-transform duration-500">
            <img
              src="https://i.postimg.cc/gJLV6CyV/Whats-App-Image-2025-05-27-at-6-37-40-PM.jpg"
              alt="Stuti Mishra"
              className="w-full h-full rounded-full object-cover border-4 border-sky-400/50"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
          Stuti Mishra
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-300 mb-4 animate-fade-in hover:text-sky-400 transition-colors duration-300" style={{ animationDelay: "0.2s" }}>
          Competitive Programmer | AI/ML Enthusiast | Tech Innovator
        </p>
        
        <p className="text-lg md:text-xl text-sky-400 mb-12 animate-fade-in font-semibold" style={{ animationDelay: "0.4s" }}>
          Building logic-driven, impact-powered tech
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-sky-500/40 animate-pulse"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Projects
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/30"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://github.com/stutimi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com/in/stuti-mishra-a75665366"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:stutimishrastutimishra14@gmail.com"
            className="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
