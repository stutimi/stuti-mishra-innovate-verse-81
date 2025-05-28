
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-purple-500/5"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                I'm a passionate competitive programmer and AI/ML enthusiast pursuing a B.Tech in Mechanical Engineering 
                with a minor in AI/ML from KNIT Sultanpur. I thrive at the intersection of logic, creativity, and social impact.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Known for my problem-solving skills and hackathon achievements, I'm actively involved in coding communities 
                and continuously share my learning journey online. My strong academic performance reflects my dedication 
                to excellence in both theoretical knowledge and practical application.
              </p>
              
              <div className="p-6 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-xl border border-sky-500/20 animate-fade-in hover:scale-105 transition-transform duration-300 group" style={{ animationDelay: "0.6s" }}>
                <p className="text-xl font-semibold text-sky-400 mb-2 group-hover:text-sky-300 transition-colors duration-300">Personal Mission</p>
                <p className="text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300">"Learning with purpose. Innovating with impact."</p>
              </div>

              {/* Internship Section */}
              <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-xl border border-green-500/20 animate-fade-in hover:scale-105 transition-transform duration-300 group" style={{ animationDelay: "0.8s" }}>
                <p className="text-xl font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">Current Internship</p>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-100 transition-colors duration-300">Image Captioning on Medical Images Using Deep Learning</h3>
                <p className="text-green-300 font-medium mb-3 group-hover:text-green-200 transition-colors duration-300">Intern | [Team Name: PicasoPhrase]</p>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Developed a deep learning model to automatically generate accurate captions for medical images (X-rays, CT scans, MRIs) 
                  using VGG/InceptionV3 for feature extraction and LSTM networks for caption generation. Conducted data preprocessing, 
                  NLP-based text processing, model training, and evaluation using BLEU and ROUGE metrics. The system supports clinical 
                  diagnostics by streamlining documentation and enhancing decision-making in healthcare.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/20 animate-fade-in hover:scale-105 transition-transform duration-300 group" style={{ animationDelay: "1s" }}>
                <p className="text-xl font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">Experience & Involvement</p>
                <ul className="text-gray-300 space-y-2 group-hover:text-gray-200 transition-colors duration-300">
                  <li>• Hacktoberfest 2024 Contributor</li>
                  <li>• Google Cloud Arcade Facilitator</li>
                  <li>• LeetCode, CodeChef & Coding Ninjas Badge Holder</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-xl border border-orange-500/20 animate-fade-in hover:scale-105 transition-transform duration-300 group" style={{ animationDelay: "1.2s" }}>
                <p className="text-xl font-semibold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">1st Year Journey</p>
                <p className="text-gray-300 mb-3 group-hover:text-gray-200 transition-colors duration-300">Explore my complete first year academic and coding journey</p>
                <a
                  href="https://drive.google.com/file/d/1A461Jnj-UwTdrL_3WhYjnXhq5zpf8MHM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-orange-500/40"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  View 1st Year Journey
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Education Timeline */}
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-2xl font-bold text-sky-400 mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-sky-500 pl-4 animate-slide-in" style={{ animationDelay: "0.4s" }}>
                    <div className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
                      <h4 className="font-semibold text-white group-hover:text-sky-200 transition-colors duration-300">B.Tech Mechanical Engineering</h4>
                      <p className="text-sky-400 group-hover:text-sky-300 transition-colors duration-300">Minor in AI/ML</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">KNIT Sultanpur (2023 - 2027)</p>
                      <p className="text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">1st Year CGPA: 9.0</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-sky-500 pl-4 animate-slide-in" style={{ animationDelay: "0.6s" }}>
                    <div className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
                      <h4 className="font-semibold text-white group-hover:text-sky-200 transition-colors duration-300">Class XII (Intermediate)</h4>
                      <p className="text-sky-400 group-hover:text-sky-300 transition-colors duration-300">UP Board</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Saraswati Vidya Mandir, Sultanpur (2020 - 2021)</p>
                      <p className="text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">84.33%</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-sky-500 pl-4 animate-slide-in" style={{ animationDelay: "0.8s" }}>
                    <div className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
                      <h4 className="font-semibold text-white group-hover:text-sky-200 transition-colors duration-300">Class X (High School)</h4>
                      <p className="text-sky-400 group-hover:text-sky-300 transition-colors duration-300">UP Board</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Saraswati Vidya Mandir, Sultanpur (2019 - 2020)</p>
                      <p className="text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">82.83%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic & Career Milestones */}
              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-2xl font-bold text-sky-400 mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-sky-500 pl-4 animate-slide-in" style={{ animationDelay: "0.6s" }}>
                    <div className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
                      <h4 className="font-semibold text-white group-hover:text-sky-200 transition-colors duration-300">Competitive Programming Journey</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Multiple platform achievements & badges</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-sky-500 pl-4 animate-slide-in" style={{ animationDelay: "0.8s" }}>
                    <div className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
                      <h4 className="font-semibold text-white group-hover:text-sky-200 transition-colors duration-300">Hackathon Champion</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Multiple wins and recognitions</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-sky-500 pl-4 animate-slide-in" style={{ animationDelay: "1s" }}>
                    <div className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
                      <h4 className="font-semibold text-white group-hover:text-sky-200 transition-colors duration-300">Community Contributor</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Open source & mentorship activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @keyframes slide-in {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};
