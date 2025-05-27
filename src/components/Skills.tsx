
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
    { name: "LeetCode", rating: "1672", color: "text-orange-400" },
    { name: "Codeforces", rating: "1333 (Pupil)", color: "text-green-400" },
    { name: "CodeChef", rating: "3-star (1637)", color: "text-yellow-400" },
    { name: "GeeksforGeeks", rating: "3-star (1673)", color: "text-blue-400" },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{name}</span>
        <span className="text-sky-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-sky-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Programming Languages */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-sky-500/20">
            <h3 className="text-xl font-bold text-sky-400 mb-6">Programming Languages</h3>
            {programmingSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-sky-500/20">
            <h3 className="text-xl font-bold text-sky-400 mb-6">Frameworks & Libraries</h3>
            {frameworks.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-gray-400 text-sm">Tools: Git, GitHub, VS Code, Google Colab</p>
            </div>
          </div>

          {/* Competitive Programming Stats */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-sky-500/20">
            <h3 className="text-xl font-bold text-sky-400 mb-6">Competitive Programming</h3>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-gray-300">{platform.name}</span>
                  <span className={`font-semibold ${platform.color}`}>{platform.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
