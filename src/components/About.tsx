
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate competitive programmer and AI/ML enthusiast pursuing a B.Tech in Mechanical Engineering 
                with a minor in AI/ML from KNIT Sultanpur. I thrive at the intersection of logic, creativity, and social impact.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Known for my problem-solving skills and hackathon achievements, I'm actively involved in coding communities 
                and continuously share my learning journey online. My strong academic performance reflects my dedication 
                to excellence in both theoretical knowledge and practical application.
              </p>
              
              <div className="p-6 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-xl border border-sky-500/20">
                <p className="text-xl font-semibold text-sky-400 mb-2">Personal Mission</p>
                <p className="text-gray-300 italic">"Learning with purpose. Innovating with impact."</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                <p className="text-xl font-semibold text-purple-400 mb-2">Experience & Involvement</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Hacktoberfest 2024 Contributor</li>
                  <li>• Google Cloud Arcade Facilitator</li>
                  <li>• LeetCode, CodeChef & Coding Ninjas Badge Holder</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Education Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-sky-400 mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-sky-500 pl-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white">B.Tech Mechanical Engineering</h4>
                      <p className="text-sky-400">Minor in AI/ML</p>
                      <p className="text-gray-400">KNIT Sultanpur (2023 - 2027)</p>
                      <p className="text-green-400 font-semibold">1st Year CGPA: 9.0</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-sky-500 pl-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white">Class XII (Intermediate)</h4>
                      <p className="text-sky-400">UP Board</p>
                      <p className="text-gray-400">Saraswati Vidya Mandir, Sultanpur (2020 - 2021)</p>
                      <p className="text-green-400 font-semibold">84.33%</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-sky-500 pl-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white">Class X (High School)</h4>
                      <p className="text-sky-400">UP Board</p>
                      <p className="text-gray-400">Saraswati Vidya Mandir, Sultanpur (2019 - 2020)</p>
                      <p className="text-green-400 font-semibold">82.83%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic & Career Milestones */}
              <div>
                <h3 className="text-2xl font-bold text-sky-400 mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-sky-500 pl-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white">Competitive Programming Journey</h4>
                      <p className="text-gray-400">Multiple platform achievements & badges</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-sky-500 pl-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white">Hackathon Champion</h4>
                      <p className="text-gray-400">Multiple wins and recognitions</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-sky-500 pl-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-white">Community Contributor</h4>
                      <p className="text-gray-400">Open source & mentorship activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
