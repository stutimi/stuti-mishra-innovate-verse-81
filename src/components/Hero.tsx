
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Sparkles, Brain, Zap } from "lucide-react";
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
      {/* Enhanced animated background with more complex effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Multi-layered animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-background"></div>
          <div className="absolute inset-0 grid-background-2"></div>
        </div>

        {/* Enhanced floating particles with varied movements */}
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'animate-pulse' : i % 3 === 1 ? 'animate-bounce' : 'animate-ping'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `linear-gradient(45deg, ${
                ['#0ea5e9', '#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 7)]
              }, transparent)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        {/* Enhanced floating orbs with magnetic effects */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl animate-magnetic opacity-20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle, ${
                ['#0ea5e9', '#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 5)]
              }, transparent)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 6 + 8}s`,
            }}
          />
        ))}

        {/* Enhanced shooting stars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {/* New: Floating code symbols */}
        {['{ }', '< />', '( )', '[ ]', '&&', '||'].map((symbol, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute text-sky-400/20 font-mono text-2xl animate-float-slow"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-20">
        {/* Enhanced profile section with 3D effects */}
        <div className="mb-8 animate-fade-in">
          <div className="relative w-72 h-72 mx-auto mb-8 group">
            {/* Multi-layer rotating borders */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900"></div>
            </div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-sky-400 p-1 animate-spin-reverse">
              <div className="w-full h-full rounded-full bg-slate-900"></div>
            </div>
            {/* Profile image with enhanced effects */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 group-hover:scale-110 transition-transform duration-500 hover:shadow-2xl hover:shadow-sky-500/50">
              <img
                src="https://i.postimg.cc/gJLV6CyV/Whats-App-Image-2025-05-27-at-6-37-40-PM.jpg"
                alt="Stuti Mishra"
                className="w-full h-full rounded-full object-cover border-4 border-sky-400/50"
              />
            </div>
            {/* Enhanced floating icons */}
            <Code className="absolute -top-4 -right-4 text-sky-400 animate-bounce" size={28} />
            <Sparkles className="absolute -bottom-4 -left-4 text-purple-400 animate-pulse" size={24} />
            <Brain className="absolute -top-4 -left-4 text-green-400 animate-ping" size={26} />
            <Zap className="absolute -bottom-4 -right-4 text-yellow-400 animate-bounce" size={22} />
          </div>
        </div>

        {/* Enhanced typography with 3D text effects */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300 text-shadow-3d">
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
          
          {/* Enhanced internship highlight */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 mx-auto max-w-4xl animate-fade-in hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 group" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center mb-4">
                <Brain className="text-green-400 mr-3 animate-pulse" size={32} />
                <h2 className="text-2xl md:text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  Deep Learning Research Intern
                </h2>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-green-100 transition-colors duration-300">
                Image Captioning on Medical Images Using Deep Learning
              </h3>
              <p className="text-green-300 font-medium mb-2 group-hover:text-green-200 transition-colors duration-300">
                Team: PicasoPhrase | AI/ML Healthcare Innovation
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['VGG/InceptionV3', 'LSTM', 'BLEU/ROUGE', 'Medical AI', 'Deep Learning'].map((tech, i) => (
                  <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <p className="text-xl md:text-3xl text-gray-300 mb-4 animate-fade-in hover:text-sky-400 transition-colors duration-300" style={{ animationDelay: "0.4s" }}>
              Competitive Programmer | AI/ML Enthusiast | Tech Innovator
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 to-purple-600/20 blur-lg rounded-lg -z-10 animate-pulse"></div>
          </div>
          
          <p className="text-lg md:text-xl text-sky-400 mb-12 animate-fade-in font-semibold" style={{ animationDelay: "0.6s" }}>
            Building logic-driven, impact-powered tech ⚡
          </p>
        </div>

        {/* Enhanced buttons with more sophisticated animations */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-5 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-sky-500/50 group transform hover:rotate-1"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              <Code className="animate-pulse" size={24} />
              View My Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="relative border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-10 py-5 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-sky-400/40 group overflow-hidden transform hover:-rotate-1"
            onClick={handleResumeDownload}
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              <Download className="group-hover:animate-bounce" size={24} />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
          </Button>
        </div>

        {/* Enhanced social links with 3D effects */}
        <div className="flex justify-center space-x-10 mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
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
              className="group relative p-4 text-gray-400 hover:text-sky-400 transition-all duration-500 hover:scale-125 transform hover:rotate-12 hover:shadow-2xl hover:shadow-sky-500/30"
            >
              <Icon size={36} className="relative z-10 group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-sky-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 blur-sm"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-200 transition-all duration-700 blur"></div>
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
        .grid-background-2 {
          background-image: radial-gradient(circle at 1px 1px, rgb(147 51 234 / 0.2) 1px, transparent 0);
          background-size: 75px 75px;
          animation: grid-move-reverse 25s linear infinite;
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes grid-move-reverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-75px, -75px); }
        }
        .shooting-star {
          animation: shooting-star 4s linear infinite;
        }
        @keyframes shooting-star {
          0% { 
            opacity: 0;
            transform: translateX(-100px) translateY(0);
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            opacity: 0;
            transform: translateX(400px) translateY(150px);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes magnetic {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          50% { transform: translateY(0px) translateX(-15px) scale(0.9); }
          75% { transform: translateY(15px) translateX(5px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-magnetic {
          animation: magnetic 12s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .text-shadow-3d {
          text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25);
        }
      `}</style>
    </section>
  );
};
