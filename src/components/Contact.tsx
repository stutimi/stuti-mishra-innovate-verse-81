
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Feel free to reach out if you're preparing for coding contests, want help with ML basics, 
            or just want to connect with a fellow tech enthusiast! I'm always excited to share knowledge 
            and collaborate on interesting projects.
          </p>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-sky-500/20 mb-8">
            <h3 className="text-xl font-bold text-sky-400 mb-6">Mentorship & Knowledge Sharing</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-white mb-2">Competitive Programming</h4>
                <p className="text-gray-400 text-sm">DSA preparation, contest strategies</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">AI/ML Basics</h4>
                <p className="text-gray-400 text-sm">Getting started with machine learning</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Project Guidance</h4>
                <p className="text-gray-400 text-sm">Building real-world applications</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <a
              href="mailto:stutimishrastutimishra14@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            
            <a
              href="https://linkedin.com/in/stuti-mishra-a75665366"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/stutimi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://x.com/Stutimishra9451"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Twitter</span>
            </a>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
            asChild
          >
            <a href="mailto:stutimishrastutimishra14@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
