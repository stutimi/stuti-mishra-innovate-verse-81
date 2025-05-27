
import { useState } from "react";

export const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
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

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>

        {/* General Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-sky-400 mb-8 text-center">Hackathons & Competitions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-2 rounded-lg border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(cert)}
              >
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Infosys Springboard Internship */}
        <div>
          <h3 className="text-2xl font-bold text-sky-400 mb-8 text-center">Infosys Springboard Internship 2024 - AI/ML</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {infosysCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-2 rounded-lg border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(cert)}
              >
                <img
                  src={cert}
                  alt={`Infosys Certificate ${index + 1}`}
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
