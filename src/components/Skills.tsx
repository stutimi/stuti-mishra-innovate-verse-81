
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
      link: "https://leetcode.com/u/stuti_mishra_gceo/",
      icon: "https://i.postimg.cc/D0nXqFNX/icons8-leetcode-24.png"
    },
    { 
      name: "Codeforces", 
      rating: "1333 (Pupil)", 
      color: "text-blue-400",
      link: "https://codeforces.com/profile/stuti_mishra",
      icon: "https://i.postimg.cc/76yGkwwW/icons8-codeforces-24.png"
    },
    { 
      name: "CodeChef", 
      rating: "3-star (1637)", 
      color: "text-yellow-400",
      link: "https://www.codechef.com/users/stuti_mishra_g",
      icon: "https://i.postimg.cc/pLXJwQqF/icons8-codechef-50.png"
    },
    { 
      name: "GeeksforGeeks", 
      rating: "3-star (1673)", 
      color: "text-green-400",
      link: "https://www.geeksforgeeks.org/user/stutimishrast257p/",
      icon: "https://cdn.worldvectorlogo.com/logos/geeksforgeeks-1.svg"
    },
    { 
      name: "InterviewBit", 
      rating: "Active Profile", 
      color: "text-purple-400",
      link: "https://codedrills.io/profile",
      icon: "https://cdn.worldvectorlogo.com/logos/interviewbit.svg"
    },
    { 
      name: "Coding Ninjas", 
      rating: "Active Profile", 
      color: "text-red-400",
      link: "https://www.naukri.com/code360/profile/5cca2742-a442-440f-84f9-ae9a5c2f77ce",
      icon: "https://i.postimg.cc/dVjtyrY4/Whats-App-Image-2025-05-28-at-7-41-16-AM.jpg"
    },
    { 
      name: "AtCoder", 
      rating: "Competitive Profile", 
      color: "text-indigo-400",
      link: "https://atcoder.jp/users/stuti_mishra",
      icon: "https://i.postimg.cc/TPHxVcHq/Whats-App-Image-2025-05-28-at-7-41-15-AM.jpg"
    },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4 group">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 group-hover:text-sky-400 transition-colors duration-300 font-medium">{name}</span>
        <span className="text-sky-400 font-bold">{level}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div
          className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-sky-400/50 relative overflow-hidden"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-purple-500/5"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-sky-400/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Programming Languages */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-sky-500/20 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-sky-400">Programming Languages</h3>
              </div>
              {programmingSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-sky-500/20 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-sky-400">Frameworks & Libraries</h3>
              </div>
              {frameworks.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <p className="text-gray-400 text-sm mb-1">🛠️ Tools: Git, GitHub, VS Code, Google Colab</p>
                <p className="text-gray-400 text-sm">🏆 Experience: Hacktoberfest 2024, Google Cloud Arcade Facilitator</p>
              </div>
            </div>
          </div>

          {/* Competitive Programming Stats */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-sky-500/20 hover:border-sky-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-sky-400">Competitive Programming</h3>
              </div>
              <div className="space-y-3">
                {platforms.map((platform, index) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-slate-700/50 backdrop-blur-sm rounded-lg hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group/item cursor-pointer border border-slate-600/30 hover:border-sky-400/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 p-1 flex items-center justify-center">
                        <img 
                          src={platform.icon} 
                          alt={platform.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 font-medium">{platform.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${platform.color}`}>{platform.rating}</span>
                      <ExternalLink size={16} className="text-gray-400 group-hover/item:text-sky-400 transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <p className="text-gray-400 text-sm">🎖️ Badges: LeetCode, CodeChef, Coding Ninjas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
