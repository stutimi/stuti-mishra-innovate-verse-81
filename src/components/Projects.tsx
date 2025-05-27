
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    },
    {
      title: "Chess Game",
      description: "Rule-based interactive chess game with complete game logic and user-friendly interface.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/stutimi/ChessGame",
      live: "https://teal-rahel-75.tiiny.site/",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    },
    {
      title: "Number Guessing Game",
      description: "Engaging logic-based browser game with intuitive gameplay and interactive feedback.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/stutimi/Number-Guessing-Game",
      live: "https://numberguessmagic.tiiny.site/",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    },
    {
      title: "Cricket Game",
      description: "Cricket-themed interactive experience with realistic gameplay mechanics and scoring system.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "#",
      live: "https://teal-rahel-75.tiiny.site/",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/50 rounded-xl overflow-hidden border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-sm border border-sky-500/20"
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
                      className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all duration-300"
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
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
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
