import React, { useState } from 'react';
import { Play, Clock, User } from 'lucide-react';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  // Actual YouTube video IDs from the provided links
  const videos = [
    {
      id: "KGNDKOSLork", // First video
      title: "Eğitim, Teknoloji ve İnsan Odaklı Gelecek",
      description: "Eğitim, teknoloji ve insan odaklı gelecek konularında kapsamlı bir değerlendirme ve tartışma.",
      speaker: "",
      duration: "1:06:45",
      thumbnail: `https://img.youtube.com/vi/KGNDKOSLork/maxresdefault.jpg`
    },
    {
      id: "Y7xHnhycLM0", // Second video
      title: "Finans, E-İhracat ve Ticarette Büyüme Dinamikleri",
      description: "Finans sektörü, e-ihracat ve ticarette büyüme dinamikleri hakkında detaylı analiz ve stratejiler.",
      speaker: "",
      duration: "1:00:14",
      thumbnail: `https://img.youtube.com/vi/Y7xHnhycLM0/maxresdefault.jpg`
    },
    {
      id: "T0WE5XdsQ2Y", // Third video
      title: "Dijital Girişimcilik ve Yazılım Ekosistemi",
      description: "Dijital girişimcilik ve yazılım ekosistemi konularında yenilikçi yaklaşımlar ve fırsatlar.",
      speaker: "",
      duration: "55:11",
      thumbnail: `https://img.youtube.com/vi/T0WE5XdsQ2Y/maxresdefault.jpg`
    },
    {
      id: "RZvtMGbEy7g", // Fourth video
      title: "Yapay Zeka ve Veri ile Dönüşen Gelecek",
      description: "Yapay zeka ve veri teknolojilerinin geleceği nasıl dönüştürdüğü hakkında kapsamlı bir analiz.",
      speaker: "",
      duration: "52:57",
      thumbnail: `https://img.youtube.com/vi/RZvtMGbEy7g/maxresdefault.jpg`
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Atölye Öne Çıkanları
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            14 Haziran 2025'te Ankara Bilkent Cyberpark'ta düzenlenen Geleceği Tasarlama Atölyesi'nin en iyi anlarını deneyimleyin
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-900 relative">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[activeVideo].id}?rel=0&modestbranding=1&autoplay=0`}
                  title={videos[activeVideo].title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {videos[activeVideo].title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {videos[activeVideo].description}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{videos[activeVideo].duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Atölye Videoları</h3>
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(index)}
                className={`bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  activeVideo === index 
                    ? 'ring-2 ring-red-500 shadow-lg' 
                    : 'shadow-md hover:shadow-xl'
                }`}
              >
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-20 h-14 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Daha Fazlasını İçin
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Özel içerik, kamera arkası görüntüler ve gelecekteki atölyeler hakkında güncellemeler için kanallarımıza abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@teknolojimenajeri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Nitelik Noktası YouTube
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;