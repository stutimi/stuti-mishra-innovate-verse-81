
import { useState } from "react";

export const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    "https://i.postimg.cc/VLTcqTC7/Screenshot-2024-12-23-081242.png",
    "https://i.postimg.cc/nLwd3PZz/f85f5043-8225-481a-af85-4b1eeced15aa.jpg",
    "https://i.postimg.cc/fTNh7JBP/Whats-App-Image-2025-05-27-at-7-03-33-AM.jpg",
    "https://i.postimg.cc/ryngNbVt/Whats-App-Image-2025-05-27-at-6-54-04-AM.jpg",
    "https://i.postimg.cc/vBjgcWyD/Whats-App-Image-2025-05-27-at-6-48-15-AM.jpg",
    "https://i.postimg.cc/2y6Gfdw6/Whats-App-Image-2025-05-27-at-10-21-57-AM.jpg",
    "https://i.postimg.cc/gJ1Gbsyc/Whats-App-Image-2025-05-27-at-6-52-12-AM.jpg",
    "https://i.postimg.cc/jSvKSt6F/Whats-App-Image-2025-05-27-at-6-52-12-AM-1.jpg",
    "https://i.postimg.cc/50nk8Rrn/0063ad9c-86c8-44c7-9e73-a97073fac637.jpg",
    "https://i.postimg.cc/d0RDJzHH/8f3381b1-479c-43f2-8445-4404694273d9.jpg",
    "https://i.postimg.cc/K8xsjTJZ/600471fd-730b-4118-b3a0-1b9f6e6cce89.jpg",
    "https://i.postimg.cc/SKz8pTCj/Whats-App-Image-2025-05-27-at-9-47-47-AM.jpg",
    "https://i.postimg.cc/xCfmhKG4/Whats-App-Image-2025-05-27-at-6-48-17-AM.jpg",
    "https://i.postimg.cc/zfTHVLBk/784d13b3-ab52-40c2-876f-957a6abe141e.jpg",
    "https://i.postimg.cc/FK09X8FP/Whats-App-Image-2025-05-27-at-7-01-18-AM.jpg",
    "https://i.postimg.cc/JhCLxx3j/Whats-App-Image-2025-05-27-at-7-00-35-AM.jpg",
    "https://i.postimg.cc/sxq8Xfw5/Whats-App-Image-2025-05-27-at-6-59-20-AM.jpg",
    "https://i.postimg.cc/HxV1sNTD/Whats-App-Image-2025-05-27-at-6-54-04-AM-1.jpg",
    "https://i.postimg.cc/6p9SpPhj/Whats-App-Image-2025-05-27-at-6-54-04-AM-2.jpg",
    "https://i.postimg.cc/TYc7F9Xr/Whats-App-Image-2025-05-27-at-6-54-03-AM.jpg",
    "https://i.postimg.cc/vHP75SsS/Whats-App-Image-2025-05-27-at-6-52-15-AM.jpg",
    "https://i.postimg.cc/Y2DjRcvg/Whats-App-Image-2025-05-27-at-6-52-13-AM.jpg",
    "https://i.postimg.cc/0NH2fDQv/Whats-App-Image-2025-05-27-at-6-52-10-AM.jpg",
    "https://i.postimg.cc/B6xk6fRz/Whats-App-Image-2025-05-27-at-6-52-10-AM-1.jpg",
    "https://i.postimg.cc/qgfNGn1q/Whats-App-Image-2025-05-27-at-6-52-10-AM-2.jpg",
    "https://i.postimg.cc/prBDysWx/Whats-App-Image-2025-05-27-at-6-48-19-AM.jpg",
    "https://i.postimg.cc/Dzs5ndXf/Whats-App-Image-2025-05-27-at-6-48-18-AM.jpg",
    "https://i.postimg.cc/g0PtwTdL/Whats-App-Image-2025-05-27-at-11-19-51-AM.jpg",
    "https://i.postimg.cc/x1V3gNZW/Whats-App-Image-2025-05-27-at-11-19-51-AM-1.jpg",
  ];

  const infosysCertificates = [
    "https://i.postimg.cc/RV1xgKFt/Whats-App-Image-2025-05-27-at-7-31-47-AM.jpg",
    "https://i.postimg.cc/t4rfc5Hs/Whats-App-Image-2025-05-27-at-7-31-24-AM.jpg",
    "https://i.postimg.cc/Hs6BWkvK/Whats-App-Image-2025-05-27-at-7-31-01-AM.jpg",
    "https://i.postimg.cc/hPZ1W3fR/Whats-App-Image-2025-05-27-at-7-30-39-AM.jpg",
    "https://i.postimg.cc/tJY7hDyF/Whats-App-Image-2025-05-27-at-7-30-16-AM.jpg",
    "https://i.postimg.cc/QM88QSJV/Whats-App-Image-2025-05-27-at-7-29-53-AM.jpg",
    "https://i.postimg.cc/qMHztsS6/Whats-App-Image-2025-05-27-at-7-29-26-AM.jpg",
    "https://i.postimg.cc/5ty0cnYT/Whats-App-Image-2025-05-27-at-7-29-00-AM.jpg",
    "https://i.postimg.cc/c41G5685/Whats-App-Image-2025-05-27-at-7-28-09-AM.jpg",
    "https://i.postimg.cc/Jzyg9X7K/Whats-App-Image-2025-05-27-at-7-27-43-AM.jpg",
    "https://i.postimg.cc/7hfMfgWW/Whats-App-Image-2025-05-27-at-7-25-31-AM.jpg",
    "https://i.postimg.cc/JhMNbwFJ/Whats-App-Image-2025-05-27-at-7-18-29-AM.jpg",
  ];

  const codingBadges = [
    {
      title: "LeetCode Badges",
      image: "https://i.postimg.cc/Kc3XZfVB/Screenshot-2025-05-27-191013.png",
      link: "https://leetcode.com/u/stuti_mishra_gceo/"
    },
    {
      title: "Coding Ninjas Badges",
      image: "https://i.postimg.cc/X7Nwf1by/Screenshot-2025-05-27-191256.png",
      link: "https://www.naukri.com/code360/profile/5cca2742-a442-440f-84f9-ae9a5c2f77ce"
    },
    {
      title: "Coding Ninjas Achievement",
      image: "https://i.postimg.cc/XJVvRhxf/Screenshot-2025-05-27-191226.png",
      link: "https://www.naukri.com/code360/profile/5cca2742-a442-440f-84f9-ae9a5c2f77ce"
    },
    {
      title: "Hacktoberfest Holopin Badges",
      image: "https://i.postimg.cc/ZnzhkyJ1/Screenshot-2025-05-27-191953.png",
      link: "https://www.holopin.io/"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-sky-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-all duration-500">
          Certifications & Achievements
        </h2>

        {/* Coding Platform Badges */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-sky-400 mb-12 text-center animate-fade-in">
            🏆 Coding Platform Badges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {codingBadges.map((badge, index) => (
              <a
                key={index}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6 rounded-xl border border-sky-500/30 hover:border-sky-400/60 transition-all duration-500 hover:scale-110 hover:rotate-1 cursor-pointer animate-fade-in backdrop-blur-sm hover:shadow-2xl hover:shadow-sky-500/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-sky-400 font-bold mb-4 text-center group-hover:text-sky-300 transition-colors text-lg">
                  {badge.title}
                </h4>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/30 transition-all duration-300" />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                    Click to view profile →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* General Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-sky-400 mb-12 text-center animate-fade-in">
            🚀 Hackathons & Competitions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-3 rounded-xl border border-sky-500/30 hover:border-sky-400/60 transition-all duration-500 hover:scale-110 hover:-rotate-2 cursor-pointer animate-fade-in backdrop-blur-sm hover:shadow-xl hover:shadow-sky-500/20"
                onClick={() => setSelectedImage(cert)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-xs font-bold bg-sky-500/80 px-2 py-1 rounded">
                      View
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infosys Springboard Internship */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-sky-400 mb-12 text-center animate-fade-in">
            💼 Infosys Springboard Internship 2024 - AI/ML
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {infosysCertificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-3 rounded-xl border border-sky-500/30 hover:border-sky-400/60 transition-all duration-500 hover:scale-110 hover:rotate-1 cursor-pointer animate-fade-in backdrop-blur-sm hover:shadow-xl hover:shadow-sky-500/20"
                onClick={() => setSelectedImage(cert)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={cert}
                    alt={`Infosys Certificate ${index + 1}`}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-xs font-bold bg-sky-500/80 px-2 py-1 rounded">
                      View
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/90 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  Click anywhere to close
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
