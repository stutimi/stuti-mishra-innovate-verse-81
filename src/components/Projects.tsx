
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe Faceoff",
      description: "Sci-fi web game with custom avatars featuring futuristic gameplay and interactive design elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/stutimi/Tic-Tac-Toe-Faceoff-APP",
      live: "https://aitttapp.tiiny.site/",
      image: "https://i.postimg.cc/rw3Vh7XZ/Screenshot-2025-05-07-231900.png",
    },
    {
      title: "Chess Game",
      description: "Rule-based interactive chess game with complete game logic and user-friendly interface.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/stutimi/ChessGame",
      live: "https://teal-rahel-75.tiiny.site/",
      image: "https://i.postimg.cc/XYCSvJmx/Screenshot-2025-05-27-162230.png",
    },
    {
      title: "Number Guessing Game",
      description: "Engaging logic-based browser game with intuitive gameplay and interactive feedback.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/stutimi/Number-Guessing-Game",
      live: "https://numberguessmagic.tiiny.site/",
      image: "https://i.postimg.cc/ZKD4RXRY/Screenshot-2025-05-27-143736.png",
    },
    {
      title: "LumiVerse VoiceBot",
      description: "Interactive voice-enabled chatbot with advanced AI capabilities and intuitive user interface.",
      tech: ["JavaScript", "HTML", "CSS", "Voice API"],
      github: "https://github.com/stutimi/LumiVerse_Bot",
      live: "https://lumiversevoicebot.tiiny.site/",
      image: "https://i.postimg.cc/63F7JTvR/Screenshot-2025-05-27-181540.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-900/50 rounded-xl overflow-hidden border border-sky-500/20 hover:border-sky-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent group-hover:from-slate-900/60 transition-all duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-sm border border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-400/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/40"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
