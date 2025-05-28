
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const { toast } = useToast();

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://i.postimg.cc/SKSbF9CY/khushi-resume-10.png';
    link.download = 'Stuti_Mishra_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume downloaded!",
      description: "Thank you for your interest.",
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background with flowing particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-background"></div>
        </div>

        {/* Floating particles with enhanced animation */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `linear-gradient(45deg, ${
                ['#0ea5e9', '#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 5)]
              }, transparent)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        {/* Large floating orbs with better positioning */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl animate-bounce opacity-20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              background: `linear-gradient(135deg, ${
                ['#0ea5e9', '#3b82f6', '#8b5cf6', '#06b6d4'][Math.floor(Math.random() * 4)]
              }, transparent)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-16">
        {/* Profile section with enhanced animations - shifted down */}
        <div className="mb-8 animate-fade-in">
          <div className="relative w-64 h-64 mx-auto mb-8 group">
            {/* Rotating border animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900"></div>
            </div>
            {/* Profile image */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://i.postimg.cc/gJLV6CyV/Whats-App-Image-2025-05-27-at-6-37-40-PM.jpg"
                alt="Stuti Mishra"
                className="w-full h-full rounded-full object-cover border-4 border-sky-400/50"
              />
            </div>
            {/* Floating code symbols */}
            <Code className="absolute -top-2 -right-2 text-sky-400 animate-bounce" size={24} />
            <Sparkles className="absolute -bottom-2 -left-2 text-purple-400 animate-pulse" size={20} />
          </div>
        </div>

        {/* Enhanced typography with better animations */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>S</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>t</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>u</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>t</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>i</span>
            <span className="mx-4"></span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>M</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>i</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>s</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>h</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>r</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>a</span>
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-3xl text-gray-300 mb-4 animate-fade-in hover:text-sky-400 transition-colors duration-300" style={{ animationDelay: "0.2s" }}>
              Competitive Programmer | AI/ML Enthusiast | Tech Innovator
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 to-purple-600/20 blur-lg rounded-lg -z-10 animate-pulse"></div>
          </div>
          
          <p className="text-lg md:text-xl text-sky-400 mb-12 animate-fade-in font-semibold" style={{ animationDelay: "0.4s" }}>
            Building logic-driven, impact-powered tech ⚡
          </p>
        </div>

        {/* Enhanced buttons with better animations */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-sky-500/40 group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code size={20} />
              View My Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="relative border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/30 group overflow-hidden"
            onClick={handleResumeDownload}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="group-hover:animate-bounce" size={20} />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Enhanced social links */}
        <div className="flex justify-center space-x-8 mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {[
            { icon: Github, href: "https://github.com/stutimi", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/stuti-mishra-a75665366", label: "LinkedIn" },
            { icon: Mail, href: "mailto:stutimishrastutimishra14@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group relative p-3 text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
            >
              <Icon size={32} className="relative z-10" />
              <div className="absolute inset-0 bg-sky-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 blur-sm"></div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .grid-background {
          background-image: radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.3) 1px, transparent 0);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .shooting-star {
          animation: shooting-star 3s linear infinite;
        }
        @keyframes shooting-star {
          0% { 
            opacity: 0;
            transform: translateX(-50px) translateY(0);
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            opacity: 0;
            transform: translateX(300px) translateY(100px);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
