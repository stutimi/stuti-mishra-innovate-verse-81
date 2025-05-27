
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-sky-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
              alt="Stuti Mishra"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Stuti Mishra
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Competitive Programmer | AI/ML Enthusiast | Tech Innovator
        </p>
        
        <p className="text-lg md:text-xl text-sky-400 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Building logic-driven, impact-powered tech
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Projects
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://github.com/stutimi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/stuti-mishra-a75665366"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:stutimishrastutimishra14@gmail.com"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
