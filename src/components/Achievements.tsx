
export const Achievements = () => {
  const achievements = [
    {
      title: "AI for Impact Hackathon Winner",
      subtitle: "LinkedIn Social Challenge Winner - Asia Pacific",
      description: "Won the LinkedIn Social Challenge with an AI solution for empowering people with disabilities. Gained recognition across LinkedIn and received Google Cloud and Hack2Skill goodies. Huge thanks to my incredible teammate - without them, we couldn't have won this social challenge!",
      year: "2024",
      type: "Hackathon",
      image: "https://i.postimg.cc/mkPt3Dwh/Screenshot-2025-03-09-182359.png",
      badge: "https://i.postimg.cc/zfTHVLBk/784d13b3-ab52-40c2-876f-957a6abe141e.jpg"
    },
    {
      title: "Tech Camp Champion",
      subtitle: "Interactive Chatbot with React JS & GPT API",
      description: "Ranked in Top 3 Projects with BarbieBot - a personalized AI chatbot. Won LinkedIn Social Contest for the second time and received exclusive Hack2Skill goodies.",
      year: "2024",
      type: "Tech Competition",
      image: "https://i.postimg.cc/nLwd3PZz/f85f5043-8225-481a-af85-4b1eeced15aa.jpg",
      badge: "https://i.postimg.cc/K8xsjTJZ/600471fd-730b-4118-b3a0-1b9f6e6cce89.jpg"
    },
    {
      title: "GenAI Christmas Edition Champion",
      subtitle: "Tech Camp Winner",
      description: "Won the LinkedIn Social Contest for the third time with an outstanding response on Generative AI concepts. Received major appreciation from the tech community.",
      year: "2024",
      type: "AI Competition",
      image: "https://i.postimg.cc/fTNh7JBP/Whats-App-Image-2025-05-27-at-7-03-33-AM.jpg",
      badge: "https://i.postimg.cc/gJ1Gbsyc/Whats-App-Image-2025-05-27-at-6-52-12-AM.jpg"
    },
    {
      title: "TUF+ Coding Challenge Winner",
      subtitle: "Take U Forward+ Platform",
      description: "Won a month-long DSA coding challenge. Earned lifetime free subscription to TUF+ Platform worth ₹8000 with comprehensive learning resources.",
      year: "2024",
      type: "Coding Challenge",
      image: "https://i.postimg.cc/8cyBCF5C/Whats-App-Image-2025-05-27-at-7-06-46-AM.jpg",
      badge: null
    },
    {
      title: "Diva Hack 2.0 Winner",
      subtitle: "From Runner-Up to Champion",
      description: "Secured 1st Place in Diva Hack 2.0 after being 1st Runner-Up in Diva Hack 1.0. Showcased growth in skills, teamwork, and AI-powered innovation.",
      year: "2025",
      type: "Hackathon",
      image: "https://i.postimg.cc/2y6Gfdw6/Whats-App-Image-2025-05-27-at-10-21-57-AM.jpg",
      badge: null
    },
    {
      title: "IIT Gandhinagar Interview",
      subtitle: "Top Performer Among 13,000+",
      description: "Selected for final interview round at IIT Gandhinagar among 13,000+ participants nationwide for a prestigious learning program.",
      year: "2024",
      type: "Academic Achievement",
      image: null,
      badge: null
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5"></div>
        {/* Floating trophy icons */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
            }}
          >
            🏆
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-300">
            Major Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`flex flex-col md:flex-row gap-6 items-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group animate-slide-in ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm border border-yellow-500/20 group-hover:bg-yellow-500/20 group-hover:border-yellow-400/40 transition-all duration-300 animate-pulse">
                    {achievement.type}
                  </span>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{achievement.year}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{achievement.title}</h3>
                <h4 className="text-lg text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300">{achievement.subtitle}</h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{achievement.description}</p>
              </div>
              
              {(achievement.image || achievement.badge) && (
                <div className="flex flex-col gap-4">
                  {achievement.image && (
                    <div className="w-48 h-32 rounded-lg overflow-hidden border border-yellow-500/20 group-hover:border-yellow-400/40 transition-all duration-300 group-hover:scale-110">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  {achievement.badge && (
                    <div className="w-32 h-32 mx-auto rounded-lg overflow-hidden border border-yellow-500/20 group-hover:border-yellow-400/40 transition-all duration-300 group-hover:scale-110">
                      <img
                        src={achievement.badge}
                        alt={`${achievement.title} badge`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        @keyframes slide-in {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};
