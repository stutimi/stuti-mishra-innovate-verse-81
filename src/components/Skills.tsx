
import { ExternalLink } from "lucide-react";

export const Skills = () => {
  const programmingSkills = [
    { name: "C/C++", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
  ];

  const frameworks = [
    { name: "TensorFlow", level: 75 },
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 85 },
    { name: "OpenCV", level: 70 },
  ];

  const platforms = [
    { 
      name: "LeetCode", 
      rating: "1672 (375+ questions)", 
      color: "text-orange-400",
      link: "https://leetcode.com/u/stuti_mishra_gceo/"
    },
    { 
      name: "Codeforces", 
      rating: "1333 (Pupil)", 
      color: "text-green-400",
      link: "https://codeforces.com/profile/stuti_mishra"
    },
    { 
      name: "CodeChef", 
      rating: "3-star (1637)", 
      color: "text-yellow-400",
      link: "https://www.codechef.com/users/stuti_mishra_g"
    },
    { 
      name: "GeeksforGeeks", 
      rating: "3-star (1673)", 
      color: "text-blue-400",
      link: "https://www.geeksforgeeks.org/user/stutimishrast257p/"
    },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4 group">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 group-hover:text-sky-400 transition-colors duration-300">{name}</span>
        <span className="text-sky-400 font-bold">{level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-sky-400 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-sky-400/50"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Programming Languages */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-sky-500/20 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 animate-fade-in">
            <h3 className="text-xl font-bold text-sky-400 mb-6">Programming Languages</h3>
            {programmingSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-sky-500/20 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold text-sky-400 mb-6">Frameworks & Libraries</h3>
            {frameworks.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-gray-400 text-sm">Tools: Git, GitHub, VS Code, Google Colab</p>
              <p className="text-gray-400 text-sm mt-1">Experience: Hacktoberfest 2024, Google Cloud Arcade Facilitator</p>
            </div>
          </div>

          {/* Competitive Programming Stats */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-sky-500/20 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold text-sky-400 mb-6">Competitive Programming</h3>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{platform.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${platform.color}`}>{platform.rating}</span>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-gray-400 text-sm">🏆 Badges: LeetCode, CodeChef, Coding Ninjas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
